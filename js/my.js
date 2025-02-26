const foll = document.querySelector("#foll");
const populars = document.querySelectorAll(".popular-2");
const middd = document.getElementById("pic3");
const two = document.querySelector(".two");
const cls = document.querySelector(".close");
const middle = document.querySelector(".middleOne");
const hidden = document.querySelector(".hidden");
const hide = document.querySelector("#hide");
const create = document.querySelector(".create1-3");




const pics = [
    { img: "../assets/images/middle.jpeg" },
    { img: "../assets/images/middle2.jpeg" },
    { img: "../assets/images/middle3.jpeg" },
    { img: "../assets/images/middle4.jpeg" },
    { img: "../assets/images/middle5.jpeg" },
]




let point = 0;

foll.addEventListener("click", () => {

    if (point == 0) {
        foll.innerHTML = "Unfollow";
        point = 1;
        saveData();
    } else {
        foll.innerHTML = "Follow";
        point = 0;
        saveData();
    }
})

populars.forEach(popular => {
    popular.addEventListener("click", function () {
        middle.style.display = "flex";

        const mid = Math.floor(Math.random() * 5);
        const on = Math.floor(Math.random() * 255);
        const to = Math.floor(Math.random() * 255);
        const bo = Math.floor(Math.random() * 255);

        middd.src = pics[mid].img;
        two.style.background = `linear-gradient(to bottom , rgb(${on}, ${to}, ${bo}) , rgb(42, 42, 42))`;
    })
})

cls.addEventListener("click", function(){
    middle.style.display = "none";
})


create.addEventListener("click", function () {
    hidden.style.display = 'block';
    hide.style.display = 'inline';
})

document.querySelector(".not").addEventListener("click", function () {
    hidden.style.display = 'none';
    hide.style.display = 'none';
})

document.querySelector(".create2-3").addEventListener("click", function () {
    alert("Please Login first");
})











function saveData(){
    localStorage.setItem("data", foll.innerHTML);
}

function showData(){
    foll = localStorage.getItem("data");
}

showData();