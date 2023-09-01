const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, this is get response" });
});

app.post("/", (req, res) => {
  res.json({ message: "Hello, this is post response" });
});

app.put("/", (req, res) => {
  res.json({ message: "Hello, this is put response" });
});

app.delete("/", (req, res) => {
  res.json({ message: "Hello, this is delete response" });
});

app.patch("/", (req, res) => {
  res.json({ message: "Hello, this is patch response" });
});

module.exports = app;
