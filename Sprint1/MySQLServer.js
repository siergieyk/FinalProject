const mysql = require('mysql')
const credentials = {

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'Movie_Database'
};

const connection = mysql.createConnection(credentials);
connection.connect();

connection.query('SELECT * FROM movies',(error, results, fields) => {
    if (error) 
    console.log(error);
    console.log(results);
});

connection.end();