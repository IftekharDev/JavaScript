
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', function() {
    let newLi = document.createElement("li");

    let del = document.createElement("button");
    del.innerText= "Delete";
    del.classList.add('delete');

    newLi.innerText = inp.value;
    ul.appendChild(newLi);
    newLi.appendChild(del)
    inp.value = '';
})


ul.addEventListener("click", function(event) {
    let ele = event.target;
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("dleted");
    } 
})


