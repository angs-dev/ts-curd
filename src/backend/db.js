const { Client } = require('pg');
const connectionString = 'postgres://postgres:root@localhost:5432/t2s';
const client = new Client({
    connectionString: connectionString
});


exports.getConnection = function(callback) {
 return client ;
};


// const mysql = require('mysql2');

// const client = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 't2s'
// });
 
// client.connect();

// client.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
 
//   console.log('Connected to the MySQL server.');
// });