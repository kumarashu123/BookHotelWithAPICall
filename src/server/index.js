var express = require("express");
var app = express();
var http = require("http");
var cors = require("cors");
bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "test"
});

connection.connect();

app.get("/hotellist", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query("select * from tbl_hotel", function(error, results, fields) {
    if (error) console.log(error);
    res.send(results);
  });
});

app.get("/memberlist", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query("select * from tbl_member", function(
    error,
    results,
    fields
  ) {
    if (error) console.log(error);
    if (results.length == 0) {
      res.status(403);
      res.send();
    } else {
      res.send(results);
    }
  });
});

app.post("/authuser", function(req, res) {
  user = req.body.user;
  pass = req.body.password;

  res.append("Content-Type", "application/json");
  res.append("Accept", "application/json");
  res.append("Access-Control-Allow-Credentials", "true");
  connection.query(
    'select * from tbl_member where email="' +
      user +
      '" and password="' +
      pass +
      '"',
    function(error, results, fields) {
      if (error) console.log(error);
      if (results.length == 0) {
        res.status(403);
        res.send();
      } else {
        res.send(results);
      }
    }
  );
});

app.post("/createuser", function(req, res) {
  fname = req.body.fname;
  lname = req.body.lname;
  email = req.body.email;
  mobile = req.body.mobile;
  address = req.body.address;
  pass = req.body.password;

  res.append("Content-Type", "application/json");
  res.append("Accept", "application/json");
  res.append("Access-Control-Allow-Credentials", "true");
  query =
    'INSERT INTO tbl_member (fname, lname, email, mobile, address, password) VALUES ("' +
    fname +
    '","' +
    lname +
    '","' +
    email +
    '","' +
    mobile +
    '","' +
    address +
    '","' +
    pass +
    '")';
  connection.query(query, function(error, results, fields) {
    if (error) console.log(error);
    if (results) {
      res.send(results);
    } else {
      res.status(403);
      res.send();
    }
  });
});

app.listen(3030, function() {
  console.log("server is running on 3030");
});
