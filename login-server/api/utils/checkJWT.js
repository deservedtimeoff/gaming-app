const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        console.log('I am here');
        if (token) {
            console.log('I am here2');
            req.user = jwt.verify(token, process.env.MY_SECRET);
            next();
            console.log('I am here3');
        }
        else {
            console.log('I am here4');
            res.json({
                status: "FAILED",
                message: "No token provided!"
            })
        }
    } catch (err) {
        console.log('I am here5');
        console.log('Or here');
        res.clearCookie("token");
    }
}