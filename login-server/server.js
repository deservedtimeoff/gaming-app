require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

const UserRouter = require('./api/User');

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})