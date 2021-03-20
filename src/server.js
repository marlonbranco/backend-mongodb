require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const subscribersRouter = require("./routes/subscribers.routes");

app.use(express.json());

app.use("/subscribers", subscribersRouter);

app.listen(3333, () => console.log("Backend started on port 3333"));