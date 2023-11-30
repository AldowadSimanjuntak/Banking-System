const ejs = require('ejs');
const mailer = require('./mailer');

const sendMail = (email, name) => {
    ejs.renderFile(__dirname + "/mail.ejs",
        { name: name }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                mailer.sendMailHTML(email, `Halo, Welcome to Menu Reset Password`, data)
                    .then(info => {
                        console.log('Email sent: ' + info.response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
};

module.exports = {
    sendMail
};
