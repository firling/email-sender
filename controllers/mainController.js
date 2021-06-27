var nodemailer = require('nodemailer');

const sendMail = (req, res) => {
    const {name, email, subject, msg} = req.body;
    const username = process.env.MAIL_USERNAME;
    const pwd = process.env.MAIL_PASSWORD;
    const to = process.env.MAIL_TO;

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: username,
          pass: pwd
        }
    });

    const html = `
<h3><strong>from: ${name}</strong</h3>
<h3><strong>mail: ${email}</strong></h3>

__________________________________________

<h3><strong>Contenu du message:</strong></h3>

<p>${msg}<p>
`

    var mailOptions = {
        from: username,
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

    return res.status(200).json({
        success: true,
    });
}

module.exports = {
    sendMail,
}