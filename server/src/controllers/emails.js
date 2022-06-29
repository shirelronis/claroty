const mongoUtils = require('../utils/mongoUtils')
const COLLECTION_NAME = "emails"
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {sendEmail} = require("../helpers/email")

const getEmailList = async (req, res) => {
    try{
        const emails = await mongoUtils.find(COLLECTION_NAME, {}).toArray()
        res.status(200).send(emails)

    } catch(err) {
        console.log('error get users')
        res.status(err.status || 500).send("error when trying get all users")
    }
}

const Send = async (req, res) => {
    try {
        const {email} = req.body;

        if (email.lentgh > 0) {
            return res.status(500).send("must enter email");
        }

        let resMail = await sendEmail(email)

        if (resMail) {
            let newEmail = {
                email,
                content: resMail.content,
                status: 'send'
            }

            const result = await mongoUtils.insertOne(COLLECTION_NAME, newEmail)
            if (result){
                console.log(result)
            }
        }

    } catch (err) {
        console.log("error sending email");
        return res.status(err.status || 500).send("error when tring send email!");
    }
}

module.exports = { getEmailList, Send }