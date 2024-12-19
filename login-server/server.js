﻿require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    app.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    next();
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const UserRouter = require('./api/User');

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})