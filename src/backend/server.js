const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:root@localhost:5432/postgres';
const client = new Client({
    connectionString: connectionString
});
client.connect();

const app = express();

app.get('/stores', (req, res) => {
    client.query('SELECT * FROM store', function (err, result) {
        if (err) {
            console.log(err); 
        }
        res.send(result.rows);
    });
});

app.use((req, res) => {

    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
    
  })


app.listen(8080, function () {
    console.log('Server is running.. on Port 8080');
});