const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ "message": err.name + ": " + err.message });
  }
});

require('./routes/pokemonsRoute')(app);
require('./routes/usersRoute')(app);


mongoose.connect('mongodb://localhost/homeworkDB', { useNewUrlParser: true })
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));

app.listen(port);

