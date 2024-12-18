const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        console.log('Here');
        req.user = jwt.verify(token, process.env.MY_SECRET);
        next();
    } catch (err) {
        console.log('Or here');
        res.clearCookie("token");
    }
}