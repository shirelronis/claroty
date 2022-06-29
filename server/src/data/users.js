const bcrypt = require("bcrypt");

const users = [
    {
        email: 'admin',
        password: bcrypt.hashSync('admin', 10),
    }
]

module.exports = { users }