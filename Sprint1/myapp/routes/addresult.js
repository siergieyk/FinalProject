var express = require('express');

var mysql = require('mysql');

var router = express.Router();



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Movie_Database"

});

  router.post('/', function(req, res, next){
  var sql = "INSERT INTO  movies (title, director_name)"
  + "VALUES (?, ?);"

  var queParams = [
    req.body.title,
    req.body.director
  ];

  con.query(sql, queParams, function(err, result, fields){
    if(err) console.log(err);
    res.render('addresult', { title: 'Add',message:'test by jin with moviesdatabase' } );

  });
})

/* GET home page. */





module.exports = router;
