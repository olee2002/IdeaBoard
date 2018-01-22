require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + '/client/build/'))
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
})

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());
app.use(methodOverride('_method'))
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const users = require('./controllers/UsersController')
app.use('/api/users',users)

const ideas = require('./controllers/IdeasController')
app.use('/api/users/:userId/ideas', ideas)

console.log('ideasController set up')
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT)
})
