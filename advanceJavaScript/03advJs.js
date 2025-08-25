
//// ------- async functions------------

// async function greet() {
//     return "Hello!";
// }

// async function greet() {
//     // throw "404 page not found";
//     return "hello";
// }

// greet().then((result) => {
//     console.log("promise was resolved...");
//     console.log("result was : ", result);
// }).catch((err) => {
//     console.log("Promise was rejected with err: ", err);
// })

// let demo = async () => {
//     return 5;
// }



//// ---------- Await keyword-------------

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000)
//     });
// }


// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*5) +1;

//             if(num>3) {
//                 reject("Promise rejected");
//             }

//             h1.style.color = color;
//             console.log(`Color changed to ${color}`);
//             resolve();
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//         await changeColor("red", 1000);
//         await changeColor("yellow", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//     } catch(err) {
//         console.log(err);
//         console.log("err caugt");
//     }
    
//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a+3);
// }



//// ---- Accessing JSON data -------

// let JsonRes = '{"fact":"A cat\u2019s hearing is better than a dog\u2019s. And a cat can hear high-frequency sounds up to two octaves higher than a human.","length":119}'

// console.log(JsonRes);
// console.log(JsonRes.fact);

// let validRes = JSON.parse(JsonRes);

// console.log(validRes);
// console.log(validRes.fact);


// let student = {
//     name : "Holder",
//     marks : 89
// }

// studentJson = JSON.stringify(student);
// console.log(studentJson);


////  ---- API Call -----------

let url = "https://catfact.ninja/fact";

fetch(url).then((res) => {
    console.log(res);
    // console.log(res.json());
    res.json().then((data) => {
        console.log(data);
    })
}).catch((err) => {
    console.log("Error : ", err);
})


url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("Error : ", err);
})



url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log(data2.fact);
})
.catch((err) => {
    console.log("Error : ", err);
})