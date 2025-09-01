
//// ------- Getting started with Express----------------

const express = require("express");
const app = express();

// console.log(app);

let port = 3000;

app.listen(port , () => {
    console.log(`app is listening on port ${port}`);
});

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
});




//// ------------ Routing -----------------

app.get("/", (req, res) => {
    res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("You contacted apple path");
});

app.get("/mango", (req, res) => {
    res.send("You contacted mango path");
});

// app.get("/*", (req, res) => {                // "*" works no more in express 5 or later versions.
//     res.send("This is a wrong path")
// });



//// -----------------------------------------------------------------

// const express = require("express");
// const app = express(); 

// const port = 3000;

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
// });

// // 1. Specific routes are defined first
// app.get("/", (req, res) => {
//     res.send("Hii, I'm root path");
// });

// app.get("/apple", (req, res) => {
//     res.send("You contacted the apple path");
// });

// app.get("/mango", (req, res) => {
//     res.send("You contacted the mango path");
// });

app.post('/', (req, res) => {
    res.send("You sent a post request to root path.")
});

// 2. The wildcard route is defined last
// app.use((req, res) => {                      //app.use must be used at last after defining all the specific paths
//     res.send("This path doesn't exist");
// });




////--------- Path parameters ----------------------------

// const express = require("express");
// const app = express();

// const port = 3000;

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
// });


// app.get("/", (req, res) => {
//     res.send("Hii, I'm root path");
// });

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});




//// -----------Qquery String -------------

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>Nothing searched</h1>");
    }else{
        res.send(`<h1>Search results for query: ${q}</h1>`);
    }
});

