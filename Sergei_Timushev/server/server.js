const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const mainBD = require('./config/bdconfig').mainBD;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pokemonsRouter = require('./routes/pokemons');
const handleToken = require('./middlewares/auth/handleToken');

const app = express();

const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:4200']
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(mainBD, { useNewUrlParser: true })
  .then(() => console.log('connection success'))
  .catch(err => console.log(err)); 

app.use(handleToken);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pokemons', pokemonsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
