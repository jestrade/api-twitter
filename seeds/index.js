const database = require("./../database");
const User = require("./../api/users/model");
const Task = require("./../api/tasks/model");
const { users, tasks } = require("./data");

(async () => {
  await database.init();
  try {
    User.collection.drop();
  } catch (err) {}
  try {
    Task.collection.drop();
  } catch (err) {}

  await users.forEach(async (user) => {
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

  await tasks.forEach(async (task) => {
    console.log("tasks", tasks);
    const newTask = new Task(task);
    try {
      await newTask.save();
    } catch (err) {
      console.log("couldn't create the task:", task);
    }
  });
})();
