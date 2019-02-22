
var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
var reuslts;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'Movie_Database'})

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

var sql = 'SELECT * FROM movies WHERE title LIKE "star%"';
connection.query(sql, function(err,rows,fields){
  if(err){
    console.log(err);
  } if(rows.length > 0){
    results = rows;
  } else {
    results =null;
  }
});

connection.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test_mysql', { title: 'Test_mysql_jin',
message:'teset by jin with moviesdatabase',
result:results });

});

module.exports = router;
