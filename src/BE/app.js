const {express,app,ROUTES,path,pg,connectionString,bodyParser,bcrypt, passport, session} = require("./config");
const {auth, findOne} = require("./auth");
const cors = require("cors");
//app.use(express.cookieParser());

app.use(cors({
  'allowedHeaders': '*',
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': true
}));

app.use(session({
    secret: 'secret',
    proxy: true,
    resave: false,
    saveUninitialized: false
}));
 
// Passport:
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const localStrategyOptions = {
    usernameField: 'login',
    passwordField: 'password'
  }

/*
  passport.use(new LocalStrategy(options, (login, password, done) => {
    // check to see if the username exists
    const selectUserByLoginQuery = `SELECT * FROM user WHERE login = '${login}'`;
    const results = [];
    pg.connect(connectionString, (err, client, done)  => {
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({success: false, data: err});
        }
        const query = client.query(selectUserByLoginQuery);
  
        query.on('row', (row) => {
          results.push(row);
        });
       
        query.on('end', () => {
          done();
          console.log(JSON.stringify(results));
          return JSON.stringify(results);
        });
    })
}))
*/

/**
 * TODO:
 * - refactoring middlewares
 * */ 

/**
 * SHOW_ALL_USERS
 */

  const router = express.Router();

  const selectUsersQuery = 'SELECT * FROM users ORDER BY id ASC;';
  const selectAllPokemonsQuery = 'SELECT * FROM pokemons ORDER BY id ASC;';
  
  app.get(ROUTES.SHOW_ALL_USERS,  (req, res, next) => {
    
    const results = [];
    
    pg.connect(connectionString, (err, client, done)  => {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query(selectUsersQuery);

      query.on('row', (row) => {
        results.push(row);
      });
     
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
    
    //return res.json(results);
  }
);

/**
 * SHOW_ALL_POKEMONS
 */

app.get(ROUTES.SHOW_ALL_POKEMONS,  (req, res, next) => {

    setHeaders(res);
    
    const results = [];
    
    pg.connect(connectionString, (err, client, done)  => {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const query = client.query(selectAllPokemonsQuery);

      query.on('row', (row) => {
        results.push(row);
      });
     
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  });

  /**
 * SHOW_ALL_POKEMONS
 */

app.get(ROUTES.SHOW_CHUNK_POKEMONS,  (req, res, next) => {
  const page = req.params.page;
  const limit = req.params.limit;

  setHeaders(res);
  
  const results = [];
  
  pg.connect(connectionString, (err, client, done)  => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const selectChunkPokemonsQuery = `SELECT * FROM pokemons where id > ${(page - 1) * limit} AND id <= ${page * limit}`;
    const query = client.query(selectChunkPokemonsQuery);

    query.on('row', (row) => {
      results.push(row);
    });
   
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


/**
 * REGISTRATION
 */

  app.post(ROUTES.REGISTRATION, (req, res, next) => {
    
    setHeaders(res);
    
    const results = [];
    const {login , password} = req.body;
    const hash = bcrypt.hashSync(password);
    let currentId;
   
    pg.connect(connectionString, (err, client, done) => {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const insertQuery = {
        text: 'INSERT INTO users(login, password) values($1,$2)',
        values: [`${login}`,`${hash}`],
      }

      client.query(insertQuery);
      const query = client.query('SELECT * FROM users ORDER BY id ASC');
      query.on('row', (row) => {
        results.push(row);
      });
      query.on('end', () => {
        done();
        return res.json(results);
      });
    }); 
    //res.send(req.body);
  });

  app.get(ROUTES.SHOW_POKEMON_BY_ID, (req, res, next) => {
    
  const id = req.params.id;

  setHeaders(res);
  
  const results = [];
  
  pg.connect(connectionString, (err, client, done)  => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const selectPokemonById = `SELECT * FROM pokemons where id = ${id}`;
    const query = client.query(selectPokemonById);

    query.on('row', (row) => {
      results.push(row);
    });
   
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
  });

  
app.post(ROUTES.LOGIN, function (req, res,err) {
    //setHeaders(res);
    const {login, password} = req.body;
    //const hash = bcrypt.hashSync(password);
    //res.send(login + " " + hash);

    const results = [];
  
    pg.connect(connectionString, (err, client, done)  => {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      const selectUserByLogin = `SELECT * FROM users where login = ${login}`;
      const query = client.query(selectUserByLogin);

      query.on('row', (row) => {
        results.push(row);
      });
    
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
    
    //return res.json(getUserCredentials(login));
    
    /*if (!login || !password) {
      res.send('login failed');    
    } else if(Authenticate(login, password)) {
      req.session.user = "user";
      res.send("login success!");
    }
    else {
        console.log('result: '  + Authenticate(login, password));
        res.send("login failed!");
    }*/
  });


  getUserCredentials = (login) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const results = [];
    pg.connect(connectionString, (err, client, done)  => {

      const selectUserByLogin = `SELECT * FROM users where login = ${login}`;
      const query = client.query(selectUserByLogin);
  
      query.on('row', (row) => {
        results.push(row);
      });
     
      query.on('end', () => {
        done();
        return results;
      });
    });
  }

  isPasswordValid = (password, storedPassword) => {
      if(password){
        const hash = bcrypt.hashSync(password);
        if (bcrypt.compareSync(hash, storedPassword)){
          return true;
        }
        else return false;
      }
      else false;
  }
   
  
  app.get(ROUTES.LOGOUT, function (req, res) {
    req.session.destroy();
    res.send("logout success!");
  });
   
 
  app.get('/content', auth, function (req, res) {
      res.send("You can only see this after you've logged in.");
  });


setHeaders = (res) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
}
app.listen(5000);