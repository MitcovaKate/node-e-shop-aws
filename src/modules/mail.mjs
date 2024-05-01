import { getOrderById } from "./data.mjs"
import nodemailer from 'nodemailer'

const sendConfirmationEmail = async (orderId) => {
    let order = await getOrderById(orderId)
    let emailAddress = order.emailAddress;


    // CONNECT
    const transporter = nodemailer.createTransport({
        host: "smtp.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: "imungalov@gmail.com",
            pass: "WNXT8E8PGT43206",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // SEND
    const info = await transporter.sendMail({
        from: 'imungalov@gmail.com', // sender address
        to: emailAddress, // list of receivers
        subject: "e-shop | Order Confirmation ✔", // Subject line
        text: `Your order No: ${orderId} was payed and confirmed!`, // plain text body
        html: `<h3>Your order No: ${orderId} was payed and confirmed!</h3>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
}

export {
    sendConfirmationEmail
}