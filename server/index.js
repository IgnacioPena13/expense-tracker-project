const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./Routes/userRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB - Congrats!"));

app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to my expense tracker API</h1> <br /> <ul><li>For users: <b>/api/users</b></li><li>For expenses: <b>/api/expenses</b></li></ul>"
  );
});
app.listen(PORT, () => {
  console.log("Server is running in port ", PORT);
});
