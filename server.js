const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv/config");

// middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("we are the champions");
});

// MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to MongoDB !");
});

app.listen(port, () => console.log(`We are listening on port ${port}`));
