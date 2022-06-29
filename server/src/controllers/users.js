const mongoUtils = require('../utils/mongoUtils')
const COLLECTION_NAME = "users"
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsersList = async (req, res) => {
    try{
        res.status(200).send(users)
        const users = await mongoUtils.find(COLLECTION_NAME, {})
    } catch(err) {
        console.log('error get users')
        res.status(err.status || 500).send("error when trying get all users")
    }
}

const SignIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(500).send("must enter params");
        }

        let query = {
            email
        }
        
        const result = await mongoUtils.find(COLLECTION_NAME, query).toArray()
        const user = result[0]
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                //Comparing the hashed password
                if (err) {
                    return res.status(500).send("server error");
                } else if (result === true) {
                    //Checking if credentials match
                    const token = jwt.sign(user.email, process.env.SECRET_KEY);
                    return res.status(200).send({token, user});
                } else {
                    //Declaring the errors
                    if (result != true) return res.status(400).send("please enter correct password!");
                }
            });
        } else {
            return res.status(400).send("User is not registered, Sign Up first");
        }
    } catch (err) {
        console.log("error signing in");
        return res.status(err.status || 500).send("error when tring signing in!");
    }
}

module.exports = { getUsersList, SignIn }