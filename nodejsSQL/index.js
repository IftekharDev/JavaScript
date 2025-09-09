
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "IFtArs@7091"
});

// let q = "SHOW TABLES";

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";  //for inserting one user
// let user = ["123", "abc_123", "abc@gmail.com", "abc"];

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [["123b", "abc_123b", "abcb@gmail.com", "abcb"], ["123c", "abc_123c", "abcc@gmail.com", "abcc"]];


// try {
//     connection.query(q, [users], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// } catch(err) {
//     console.log(err);
// }

// connection.end();

// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }

// console.log(getRandomUser());

//// Inserting User in Bulk---------------------

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// for(let i = 1; i<=100; i++) {
//   data.push(getRandomUser());
// }

// try {
//     connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// } catch(err) {
//     console.log(err);
// }

// connection.end();


app.listen(port, () => {
  console.log("Server listening on port 3000.");
});

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try{
      connection.query(q, (err, result) => {
      if(err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", {count});
    });
  } catch(err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

app.get("/users", (req, res) => {
  let q = `SELECT * FROM user`;
  try{
      connection.query(q, (err, result) => {
      if(err) throw err;
      users = result;
      res.render("showusers.ejs", {users});
    });
  } catch(err) {
    console.log(err);
    res.send("Some error in DB");
  }
});



