const jwt = require("jsonwebtoken");
const secret =
  "044f4b3501cd8e8131d40c057893f4fdff66bf4032ecae159e0c892a28cf6c8e";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};
