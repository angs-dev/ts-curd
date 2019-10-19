const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const indexRouter = require('./router');
const passport = require('passport');
const app = express();
process.setMaxListeners(0);


app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});




app.use('/api', indexRouter);

app.use((req, res) => {

    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
    
  })


app.listen(8080, function () {
    console.log('Server is running.. on Port 8080');
});

