
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "arsalan",
        content : "I love coding!"
    },
    {
        username : "zainab",
        content : "Hard work is so important"
    },
    {
        username : "Harry",
        content : "Just sleep well, nothing else matters"
    }
]

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/posts", (req, res) => {
    let {username , content} = req.body;
    posts.push({username, content});
    res.send("Post request working");
});

