var express = require('express');
var router = express.Router();
var reuslts;
var con = require('../db');


router.post('/', function(req, res, next){
var sql = "DELETE FROM movies WHERE movie_id =" +"? ;"

var queParams = [parseInt(req.body.deleteid)];

con.query(sql, queParams, function(err, result, fields){
  if(err) console.log(err);
/* GET home page. */
res.render('delete', { title: 'delete' });

});

})



module.exports = router;
