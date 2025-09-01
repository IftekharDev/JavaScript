
//// ------- Getting started with Express----------------

const express = require("express");
const app = express();

// console.log(app);

let port = 3000;

app.listen(port , () => {
    console.log(`app is listening on port ${port}`);
})

app.use((req, res) => {
    // console.log(req);
    console.log("Request recieved");
    // res.send("This is my first server response.");
    
    // res.send({
    //     name : "apple",
    //     color : "red"
    // });

    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>"
    res.send(code);
})