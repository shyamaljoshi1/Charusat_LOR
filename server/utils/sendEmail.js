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
    to: ["dvnshnirmal001@gmail.com","ndev2003@gmail.com","20ce038@charusat.edu.in", "20ce143@charusat.edu.in"],
    subject: "Charusat LOR",
    text: "Chodu o Email Done!",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
