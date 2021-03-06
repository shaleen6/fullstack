const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stacks = require("./routes/api/stacks");

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//USER ROUTES
app.use("/api/stacks", stacks);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server connected on port ${port}`));
