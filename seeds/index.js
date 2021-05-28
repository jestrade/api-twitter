const database = require("./../database");
const User = require("./../api/users/model");
const { users } = require("./data");

(async () => {
  await database.init();
  try {
    User.collection.drop();
  } catch (err) {}

  users.forEach(async (user) => {
    const password = Date.now().toString();
    user.password = password;

    console.log("user", user);
    const newUser = new User(user);
    try {
      await newUser.save();
    } catch (err) {
      console.log("couldn't create the user:", user);
    }
  });
})();
