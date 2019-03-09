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

  sql = 'SELECT title, director_name, actor_1_name, actor_2_name, actor_3_name, genres, movie_lang, content_rating, production_year, budget, imdb_score FROM movies WHERE title LIKE "%' + [req.query.title] +'%"';
   if(req.query.director !==""){sql = sql + ' AND director_name LIKE "%' +[req.query.director] +'%"'};

   if(req.query.actor !==""){sql = sql + ' AND actor_1_name LIKE "%' +[req.query.actor] +'%"'};
   if(req.query.genre !==""){sql = sql + ' AND genres LIKE "%' +[req.query.genre] +'%"'};
   if(req.query.language !==""){sql = sql + ' AND movie_lang LIKE "%' +[req.query.language] +'%"'};
   if(req.query.production_year !==""){sql = sql + ' AND production_year > ' +[parseInt(req.query.production_year)]};
   if(req.query.imdb_score !==""){sql = sql + ' AND imdb_score > ' +[parseInt(req.query.imdb_score)]};
   sql = sql +';';
   console.log(sql);
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
