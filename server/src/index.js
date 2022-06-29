const bodyParser = require('body-parser');
const express = require('express')
var cors = require('cors')
const { initializeDb } = require('./utils/mongoUtils');

const { mongoConnect } = require('./utils/database.js');

const indexRouter = require('./routes/index');

mongoConnect(async () => {
    console.log('connected DB')
    await initializeDb()
    app.listen(8000, () => console.log("Server running on port 8000"));
})
    
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(indexRouter)