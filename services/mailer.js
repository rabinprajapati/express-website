const nodemailer = require("nodemailer");

const mail = (data) => {
  console.log(data.email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "rabinpjpt@gmail.com",
      pass: "glernewtgznvygws",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main(data) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "rabinpjpt@gmail.com", // list of receivers
      subject: data.subject, // plain text body
      html: data.message, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
  main(data);
};

module.exports = mail;
// main().catch(console.error);
