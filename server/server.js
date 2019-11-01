const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { findOrCreateUser } = require("./controllers/userController");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected!"))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // cors: {
  //   // origin: "*", // <- allow request from all domains
  //   origin: "https://zachzwy.github.io",
  //   credentials: true // <- enable CORS response for requests with credentials (cookies, http authentication)
  // },
  playground: true,
  introspection: true,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization;
      if (authToken) {
        // find or create user
        currentUser = await findOrCreateUser(authToken);
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`);
    }
    return { currentUser };
  }
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Server listening on ${url}`));
