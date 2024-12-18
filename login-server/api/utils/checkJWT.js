const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    console.log('I started');
    jwt.verify(token, process.env.MY_SECRET).then((data) => {
        req.user = data;
        next();
        console.log('I succeeded');
    }).catch((err) => {
        console.log('I Failed');
        res.clearCookie("token");
        res.json({
            status: "FAILED",
            message: "Failed to verify cookie"
        })
    })
}