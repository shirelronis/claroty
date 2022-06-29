const nodemailer = require('nodemailer');
const uuid4  = require("uuid4");

let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "5df62a6b0990cc",
        pass: "7e139855fa25e8"
    }
 })
 const sendEmail = (email) => {
    let id = uuid4();
    let link = `http://localhost:3000/attack/${id}`
    let content = `Hey! way wont you check this cool website? ${link}`

    message = {
        from: "attacker@mailtrap.com",
        to: email,
        subject: "Hello",
        text: content
    }

    try {
        return new Promise(function (resolve, reject){
            transporter.sendMail(message, function(err, info) {
                if (err) {
                    console.log(err)
                    console.log("error sending email");
                    reject(null)
                } else {
                    console.log(info);
                    resolve({id, content, link});
                    // return {id, content, link}
                }
            })
        })
    } catch(err) {
        console.log("error sending email");
        return null
    }
 }

 module.exports = {sendEmail}