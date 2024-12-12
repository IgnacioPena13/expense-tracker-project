const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB - Congrats!"));

const app = express();
app.use(cors());

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: "Diana Martinez",
    email: "diana.martinez@example.com",
    age: 30,
    isActive: false,
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
    age: 25,
    isActive: true,
  },
];

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log("Server is running in port ", PORT);
});
