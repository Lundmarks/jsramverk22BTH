const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 1337;

// app.use(express.json()); //instead of body-parser //didnt work?
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// Middleware
// Called for all routes.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});


// Routes
///////////

const index = require('./routes/index');
const docs = require('./routes/docs');

app.use('/', index);
app.use('/docs', docs);

// Route for 404 and error handling
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});


// Start up server
app.listen(port, () =>console.log(`dottxt API listening on port ${port}!`));
