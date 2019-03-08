var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var reuslts;
var sql;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Movie_Database"
});

// router.post('/', function(req, res){
//     //console.log(req.body.title); // to confirmed string input
//     sql = 'SELECT * FROM movies WHERE title LIKE "' +[req.body.title] +'%";';
//     res.send(sql);
//     // var queParams = [req.body.title];
//     // con.query(sql, function(err, rows, fields){
//     //   if(err){
//     //   console.log(err);
//     //   } if(rows.length > 0){
//     //       results = rows;
//     //   } else {
//     //       results = null;
//     //   }
//     // });
//      //Add this line and see if that works.
//     //It should perform the post action and THEN redirect to the GET
// });
console.log(sql);
router.get('/', function(req, res, next) {
  sql = 'SELECT * FROM movies WHERE title LIKE "' +[req.query.title] +'%";';
    con.query(sql, function(err, rows, fields){
        if(err){
           console.log(err);
        }
        results = rows;
    });
    res.render('search', { title: 'Search result',
        message:'test by jin with moviesdatabase',
        result:results });
});

module.exports = router;
