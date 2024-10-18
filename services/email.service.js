const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mailtrscbe@gmail.com",
    pass: "jkdkseaqrzsgduao",
  },
});

const mailOptions = (_) => ({
    from: "mailtrscbe@gmail.com",
    to: "vaishnavitirupatitours@gmail.com",
    subject: `Vaishnavi Tirupati Tours Enquiry`,
    html: `
        <h1>Vaishnavi Tirupati Tours</h1> 
        Name: ${_.name}<br>
        Phone: ${_.phone}<br>
        No.Of.People : ${_.peopleCount}<br>
        Packages: ${_.package}<br>
        Vehicle Type : ${_.vehicle}<br>
        Trip Date : ${_.tripDate}<br>`,
});

const sendMail = (data) => {
  let options = mailOptions(data)
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendMail