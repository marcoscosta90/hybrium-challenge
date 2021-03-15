const express = require('express');

const routes = require('./routes.js')

require('./database')

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);

/* const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('./config/smtp')

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    }
})



async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Teste para projeto',
        subject: 'Assunto do projeto',
        from: 'Marcos Costa <marcoscosta.dev@gmail.com>',
        to: ['marcoscosta.dev@gmail.com', 'carla_callegari@hotmail.com', 'marcelo_rl2@hotmail.com']
    })
    console.log(mailSent)
}
run() */