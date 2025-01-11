const jwt = require("jsonwebtoken");
const authController = require("../Controllers/authController");

module.exports = (req, res, next) => {
  console.log("Request Headers:", req.headers); // Log all headers

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("Authorization Header:", authHeader);
  console.log("Token:", token);

  if (!token) {
    console.log("Access denied. No token provided.");
    return res.status(401).json({ message: "Access denied" });
  }

  if (authController.blacklist.has(token)) {
    console.log("Token has expired.");
    return res.status(400).json({ message: "Token has expired" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Invalid token:", error);
    return res.status(403).json({ message: "Invalid token" });
  }
};
