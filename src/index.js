const express = require("express");
const { urlencoded, json } = require("body-parser");
const { cloudinaryConfig } = require("./config/cloudinaryConfig");
const cors = require("cors");
const connect = require("./config/mongoConfig");
const router = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("*", cloudinaryConfig);

app.use("/book-my-hotel", router);

const port = process.env.PORT || "2345";

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("Hurray! listening to port no: ", port);
  });
};

start();