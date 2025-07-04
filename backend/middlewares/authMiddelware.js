const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "No token provided or token format incorrect",
      });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Token is invalid or expired",
        });
      } else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Auth middleware error",
      error,
    });
  }
};

module.exports = authMiddleware;
