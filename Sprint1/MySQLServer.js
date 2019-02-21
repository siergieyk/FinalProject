const mysql = require('mysql')
const credentials = {

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'New-Password-Here',
    databse: 'movie_database'
};

const connection = mysql.createConnection(credentials);
connection.connect();

connection.query('SELECT * FROM movies',(error, results, fields) => {
    if (error) 
    console.log(error);
    console.log(results);
});

connection.end();