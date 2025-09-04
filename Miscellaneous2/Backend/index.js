
const express = require("express");
const app = express();
const port = 3000;

app.listen(port , () => {
    console.log(`server listening on port ${port}`);
});

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard GET request, Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    res.send("Standard POST request");
});

