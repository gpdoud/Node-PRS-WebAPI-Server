const express = require("express");
var app = express();

const cors = require("cors");
app.use(cors());
app.options("*", cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var multer = require("multer");
var upload = multer();

var UsersCtrl = require("./users.controller.js");
var usersCtrl = new UsersCtrl();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Users/List", (req, res) => {
  res.send(usersCtrl.list());
});

app.get("/Users/Get/:id", (req, res) => {
  var id = +req.params.id;
  res.send(usersCtrl.get(id));
});

app.post("/Users/Create", upload.array(), (req, res, next) => {
  res.send(usersCtrl.create(req.body));
});

app.post("/Users/Change", upload.array(), (req, res, next) => {
  res.send(usersCtrl.change(req.body));
});

app.post("/Users/Remove", upload.array(), (req, res, next) => {
  res.send(usersCtrl.remove(req.body));
});

app.get("/Users/Auth/:username/:password", (req, res) => {
  var username = req.params.username;
  var password = req.params.password;
  res.send(usersCtrl.auth(username, password));
});

var server = app.listen(5000, () => {
  console.log("PRS server running on 5000 ...");
});