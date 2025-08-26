
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

// let url = "https://catfact.ninja/fact";

// fetch(url).then((res) => {
//     console.log(res);
//     // console.log(res.json());
//     res.json().then((data) => {
//         console.log(data);
//     })
// }).catch((err) => {
//     console.log("Error : ", err);
// })


// url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error : ", err);
// })


// url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log(data2.fact);
// })
// .catch((err) => {
//     console.log("Error : ", err);
// })




////---------- Using fetch with async await--------

// url = "https://catfact.ninja/fact";


// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch(e) {
//         console.log('err - ', e);
//     }
//      console.log("Good");
// }



//// ---- Using Axios --------

// url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         // let res = await fetch(url);
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//         // let data = await res.json();
//         // console.log(data.fact);
//     } catch(e) {
//         console.log('err - ', e);
//     }
// }



//// ----------------

// let btn = document.querySelector("button");
// let p = document.querySelector('#fact');


// url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log('err - ', e);
//         return "No fact found";
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     p.innerText = fact;
// })



//// ---- Random dog images -----------

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn2 = document.querySelector("#dogbtn");

// async function getImageUrl() {
//     try{
//         let link = await axios.get(url2);
//         return link.data.message; 
//     } catch(e) {
//         console.log("Err - ", e);
//         return "/";
//     }
// }

// btn2.addEventListener("click", async () => {
//     let url = await getImageUrl();
//     let img = document.querySelector("img");
//     img.setAttribute("src", url);
// })




//// ----- Sending headers with API request ------------

// url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }



url = "http://universities.hipolabs.com/search?name=";
btn = document.querySelector("#unibtn");

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data
    } catch(err) {
        console.log(err);
        return [];
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;
    let res = await getColleges(country);
    show(res);
})

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of colleges) {
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}


