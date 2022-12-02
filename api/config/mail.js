const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "matiasezequielnasif@gmail.com",
    pass: "mbczxhrjwbehhonl",
  },
});

// transporter.verify((err, success) => {
//     if (err) console.error(err);
//     else console.log('Mail config is correct');
// });

const sendMailToUnder = (mail) => {
  const mailOptions = {
    from: mail.from,
    to: "matiasezequielnasif@gmail.com",
    subject: `${mail.person} se quiere comunicar con vos desde Under Club Page`,
    html: `
    <h3>Información</h3>
    <ul>
    <li>Nombre: ${mail.person}</li>
    <li>Email: ${mail.from}</li>
    </ul>

    <h3>Mensaje</h3>
    <p>${mail.body}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
};

module.exports = { sendMailToUnder };
