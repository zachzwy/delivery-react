const { AuthenticationError } = require("apollo-server");

const user = {
  // Create a fake data
  _id: "1",
  name: "Wenyu Zhang",
  email: "zachzwy@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

const authenticated = next => (root, args, ctx, info) => {
  // ctx is short for context
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in.");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
