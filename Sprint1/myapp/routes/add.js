var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Movie_Database"
});
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   //Insert a record in the "customers" table:
//   var sql = "INSERT INTO movies() VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });



  router.post('/', function(req, res, next){
  var sql = "INSERT INTO  movies (title, director_name)"
  + "VALUES (?, ?);"
  var queParams = [
    req.body.title,
    req.body.director
  ];
  con.query(sql, queParams, function(err, result, fields){
    if(err) console.log(err);
    console.log("Connected");
    res.status(201).send('added');
  });

})
// con.end();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Add' });
});

module.exports = router;
