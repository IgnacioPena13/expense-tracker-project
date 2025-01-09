const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./Routes/userRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
  })
);
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
