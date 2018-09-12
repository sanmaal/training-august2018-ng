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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});
require('./routes/pokemonsRoute')(app);
require('./routes/usersRoute')(app);


mongoose.connect('mongodb://localhost/homeworkDB', { useNewUrlParser: true })
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));

app.listen(port);

