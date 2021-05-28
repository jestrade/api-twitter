const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findUserById } = require("../services/userService");
const { locale } = require("../../locale");
const { config } = require("../../config");
const { newAccount } = require("../services/mailerService");

const User = require("./model");

const list = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  User.find({ active: true }, ["name", "username", "createdAt", "updatedAt"])
    .limit(Number(limit))
    .skip(skip)
    .sort({ createdAt: -1 })
    .then(async (users) => {
      const total = await User.estimatedDocumentCount();
      const totalPages = Math.ceil(total / limit);
      const hasMore = page < totalPages;

      res.status(200).json({
        hasMore,
        totalPages,
        total,
        data: users,
        currentPage: page,
      });
    });
};

const create = async (req, res) => {
  const { name, email, username, password } = req.body;

  const findUser = await User.find({ $or: [{ username }, { email }] });
  if (findUser.length > 0) {
    res
      .status(500)
      .json({ message: locale.translate("errors.user.userExists") });
    return;
  }

  const user = {
    name,
    email,
    username,
    password,
  };

  const newUser = new User(user);
  newUser.save().then((userCreated) => {
    newAccount(user.email);

    res.status(200).json(userCreated);
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const foundUser = await User.findOne({ username });
  if (foundUser) {
    // eslint-disable-next-line no-underscore-dangle
    const userId = foundUser._id;
    const result = await bcrypt.compare(password, foundUser.password);
    if (result) {
      const token = jwt.sign({ userId }, config.jwtKey);
      const cookieProps = {
        maxAge: 60 * 60 * 24 * 1000,
        httpOnly: true,
      };

      res
        .status(200)
        .cookie("token", token, cookieProps)
        .json({
          data: {
            username: foundUser.username,
            name: foundUser.name,
            token: token,
          },
          message: "ok",
        });
    } else {
      res.json({ message: locale.translate("errors.user.userNotExists") });
    }
  } else {
    res.json({ message: locale.translate("errors.user.userNotExists") });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { name, email, username, password } = req.body;

  if (name && email && username && password) {
    const user = {
      name,
      email,
      username,
      password,
    };

    const userFind = await findUserById(id);

    if (userFind) {
      const userUpdated = await User.updateOne(
        { _id: userFind._id },
        {
          $set: { name: user.name, email: user.email, password: user.password },
        }
      );

      if (userUpdated.ok === 1) {
        res.status(204).json({
          message: locale.translate("success.user.onUpdate"),
        });
      } else {
        res.status(500).json({
          message: `${locale.translate("errors.user.onUpdate")} ${id}`,
        });
      }
    } else {
      res.status(500).json({
        message: `${locale.translate("errors.user.userNotExists")} ${id}`,
      });
    }
  } else {
    res.status(500).json({ message: locale.translate("errors.invalidData") });
  }
};

const remove = async (req, res) => {
  const { id } = req.body;

  await User.findOneAndDelete({ _id: { $eq: id } }, (err, docs) => {
    if (err) {
      res.status(500).json({
        message: `${locale.translate("errors.user.onDelete")}`,
      });
    } else if (docs) {
      res.status(200).json({
        message: `${locale.translate("success.user.onDelete")}`,
        id: docs._id,
      });
    } else {
      res.status(404).json({
        message: `${locale.translate("errors.user.userNotExists")}`,
      });
    }
  });
};

const logout = (req, res) => {
  res.clearCookie("token").json({ message: "ok" });
};

module.exports = {
  list,
  create,
  update,
  remove,
  login,
  logout,
};
