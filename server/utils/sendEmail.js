const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: ,
    // port: ,
    service: "gmail",
    auth: {
      user: "tempmailfornode@gmail.com",
      pass: "ntusehvuxgsnzazs",
    },
  });

  const mailOptions = {
    from: "tempmailfornode@gmail.com",
    to: ["dvnshnirmal001@gmail.com","ndev2003@gmail.com"],
    subject: "this is test1",
    text: "Hello there",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
