require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({
    "Access-Control-Allow-Origin": "localhost:8081"
}));

app.headers('Access-Control-Allow-Origin', '*');
app.headers('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
app.headers('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Auth-Token');

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