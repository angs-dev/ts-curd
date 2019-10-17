var mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 100,
        host :'remotemysql.com',
        user : 's9D4yRpQou',
        password : 'zo5Jh0xXPA'
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
        console.log('connected');
      return callback(err);
    }
    console.log('connected');
    callback(err, conn);
  });
};