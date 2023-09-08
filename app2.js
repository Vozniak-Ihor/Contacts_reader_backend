const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "dicixif802@chambile.com",
  from: "nemaigor1@gmail.com",
  subject: "Test email",
  html: "<h2>Test email from localhost:3000</h2>",
}

sgMail
  .send(email)
  .then(() => console.log("все працює"))
  .catch((err) => console.log(err.messages));
