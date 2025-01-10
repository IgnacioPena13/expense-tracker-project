const jwt = require("jsonwebtoken");
const authController = require("../Controllers/authController");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (authController.blacklist.has(token)) {
    return res.status(400).json({ message: "Token has expired" });
  }
  if (!token) {
    console.log("access denied.");
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "invalid token" });
  }
};
