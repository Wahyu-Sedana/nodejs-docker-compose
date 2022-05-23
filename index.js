const express = require("express");
const mysql = require("mysql");
const app = express();


const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || "3306",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root",
    database: process.env.MYSQL_DATABASE || "db"
});

app.get("/", (req, res) => {
    connection.query("SELECT * FROM student", (err, rows) => {
        if(err){
            res.json({
                success: false,
                err,
            });
        }else{
            res.json({
                success: true,
                rows,
            });
        }
    });
});

app.listen(5000, () => console.log("listining on port 5000"));
