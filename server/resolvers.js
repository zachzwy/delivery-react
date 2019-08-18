const user = {
  // Create a fake data
  _id: "1",
  name: "Wenyu Zhang",
  email: "zachzwy@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
