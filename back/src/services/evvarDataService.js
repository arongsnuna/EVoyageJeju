import express from "express";
import mysql from "mysql";
import { pool } from "../config/dbConnect";
const app = express();

pool.get("/api/data", (req, res) => {
  // Query the database
  pool.query(
    "SELECT year, city, population FROM EvcarCountData  WHERE year = 2020",
    function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${SERVER_PORT}`);
});
