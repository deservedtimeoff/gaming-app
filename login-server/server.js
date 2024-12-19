require('./config/db');

const app = require('express')();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})