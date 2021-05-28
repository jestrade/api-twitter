const nodemailer = require("nodemailer");
const { config } = require("./../../config");
console.log("config.mailer", config.mailer);
console.log("config.mail", config.mail);

const transporter = nodemailer.createTransport({
  host: config.mailer.host,
  port: Number(config.mailer.port),
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.mailer.user, // generated ethereal user
    pass: config.mailer.password, // generated ethereal password
  },
});

const newAccount = async (to) => {
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
