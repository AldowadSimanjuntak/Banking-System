require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

const sendMailHTML = (to, subject, html) => {
    const mailOptions = {
        from: process.env.GMAIL_USERNAME,
        to,
        subject,
        html
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendMailHTML
};
