const nodeMailer = require("nodemailer");
const path = require("path");

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     // host: ,
//     // port: ,
//     service: "gmail",
//     auth: {
//       user: "tempmailfornode@gmail.com",
//       pass: "ntusehvuxgsnzazs",
//     },
//   });

//   const mailOptions = {
//     from: "tempmailfornode@gmail.com",
//     to: ["dvnshnirmal001@gmail.com","ndev2003@gmail.com","20ce038@charusat.edu.in", "20ce143@charusat.edu.in"],
//     subject: "Charusat LOR",
//     text: "Comming soon...",
//   };

//   await transporter.sendMail(mailOptions);
// };

const sendEmail = async (id) => {
  try {
    console.log("Received email request with ID:", id);
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
      to: [
        "ndev2003@gmail.com",
        "20ce143@charusat.edu.in",
        "20ce038@charusat.edu.in",
        "20ce061@charusat.edu.in",
        "20ce031@charusat.edu.in",
      ],
      subject: "Charusat LOR",
      text: `Comming soon...`,
      attachments: [
        {
          filename: `${id.toLowerCase()}.pdf`,
          path: path.join("./generated_lor", `${id.toLowerCase()}.pdf`), // Replace with the path to your attachment file
        },
      ],
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendEmail;
