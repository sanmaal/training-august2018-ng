const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'SECRET' , resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/pokemonsRoute')(app);
require('./routes/usersRoute')(app);


mongoose.connect('mongodb://localhost/homeworkDB', { useNewUrlParser: true })
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));

app.listen(port);

