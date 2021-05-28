const Task = require("./model");

const list = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  Task.find({}, ["content", "createdAt"])
    .limit(Number(limit))
    .skip(skip)
    .sort({ createdAt: -1 })
    .then(async (tasks) => {
      const total = await Task.estimatedDocumentCount();
      const totalPages = Math.round(total / limit);
      const hasMore = page < totalPages;

      res.status(200).json({
        hasMore,
        totalPages,
        total,
        data: tasks,
        currentPage: page,
      });
    });
};

const create = (req, res) => {
  const { content } = req.body;

  const task = {
    content,
  };

  const newTask = new Task(task);
  newTask.save().then((taskCreated) => {
    res.status(200).json(taskCreated);
  });
};

const remove = (req, res) => {
  const { id } = req.body;
  Task.deleteOne({ _id: id })
    .then(() => {
      res.status(200).json({ message: "ok" });
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

module.exports = {
  list,
  create,
  remove,
};
