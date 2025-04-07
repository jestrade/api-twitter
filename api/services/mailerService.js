const nodemailer = require("nodemailer");
const { config } = require("./../../config");

const { host, port, user, password } = config.mailer;

const transporter = nodemailer.createTransport({
  host: host,
  port: Number(port),
  secure: false,
  auth: {
    user: user,
    pass: password,
  },
});

const newAccount = async (to) => {
  if (!host || !port || !user || !password) {
    console.log("Mailer data not defined");

    return;
  }
  try {
    await transporter.sendMail({
      from: config.mail,
      to: to,
      subject: "New account",
      text: "Welcome to Twitter",
      html: "Welcome to <b>Twitter</b>",
    });
  } catch (err) {
    console.log("mailer", err);
  }
};

module.exports = { newAccount };
