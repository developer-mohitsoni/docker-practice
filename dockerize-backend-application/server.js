import express from "express";

const PORT = process.env.PORT || 5500;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Dockerize Express Application");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
