
//// -------- Using EJS-----------------

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.send("hello");
});

//// --------- Passing data to ejs-----------

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {diceValue});
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    let followers = ["Jumbo", "Bob", "John", "Ramu"];
    res.render("instagram.ejs", {username, followers});
});


