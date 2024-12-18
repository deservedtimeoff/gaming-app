const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    jwt.verify(token, process.env.MY_SECRET).then((data) => {
        req.user = data;
        next();
    }).catch((err) => {
        res.clearCookie("token");
        res.json({
            status: "FAILED",
            message: "Failed to verify cookie"
        })
    })
}