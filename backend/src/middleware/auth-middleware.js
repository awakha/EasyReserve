const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json();
    }

    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json();
    }

    const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);

    if (!userData) {
      return res.status(401).json();
    }

    req.user = userData;
    next();
  } catch (e) {
    return res.status(401).json();
  }
};
