require('./config/db');

const app = require('express')();
const port = process.env.PORT || 4000;

const cors = require('cors');
app.use(cors());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

const UserRouter = require('./api/User');
app.use('/user', UserRouter);

const GameRouter = require('./api/Game');
app.use('/game', GameRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})