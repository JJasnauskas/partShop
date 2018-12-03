const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const cors = require('cors');
const MONGO_MLAB_PW = require('./const'); 

const users = require('./routes/user'); 
const postroutes = require('./routes/PostRoute');

mongoose.Promise = global.Promise
mongoose.connect(config.DB + MONGO_MLAB_PW.MONGO_MLAB_PW +
    "@ds015774.mlab.com:15774/products", { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the databse' + err) }
    );

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', users);
app.use('/posts', postroutes);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});