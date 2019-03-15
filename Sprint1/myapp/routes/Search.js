var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var reuslts;
var sql;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Movie_Database"
});


console.log(sql);
router.get('/', function(req, res, next) {

  sql = 'SELECT movie_id, title, director_name, actor_1_name, actor_2_name, actor_3_name, genres, movie_lang, content_rating, production_year, budget, imdb_score                                                                                                        FROM movies                                                                                                                            WHERE title LIKE "%' + [req.query.title] +'%"                                                                                             AND director_name LIKE "%' +[req.query.director] +'%"                                                                                      AND actor_1_name LIKE "%' +[req.query.actor] +'%"                                                                                       AND movie_lang LIKE "%' +[req.query.language] +'%"                                                                                          AND production_year >= "'+[parseInt(req.query.production_year)]+'"                                                                         AND imdb_score >= "'+[parseInt(req.query.imdb_score)]+'"';


   console.log(sql);
    con.query(sql, function(err, rows, fields){
        if(err){
           console.log(err);
        }
        results = rows;
    });
    res.render('search', { title: 'Search Results',

        result:results });
});

module.exports = router;
