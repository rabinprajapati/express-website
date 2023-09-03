const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.json());

app.use("/", indexRoutes);

app.listen(3000);
console.log("app running");
