var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM test";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });