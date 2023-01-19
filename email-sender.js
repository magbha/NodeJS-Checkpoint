const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emailmt3k@gmail.com',
    pass: 'MDP'
  }
});

const mailOptions = {
  from: 'emailmt3k@gmail.com',
  to: 'abdelghanibha@gmail.com',
  subject: 'Sending Email',
  text: 'That was nice!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});