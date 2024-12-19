const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        if (token) {
            req.user = jwt.verify(token, process.env.MY_SECRET);
            next();
        }
        else {
            res.json({
                status: "FAILED",
                message: "No token provided!"
            })
        }
    } catch (err) {
        console.log('Or here');
        res.clearCookie("token");
    }
}