let spotifyLogo = document.querySelector(".spotify-logo");
let homeCircle = document.querySelector(".home-circle");
const show1 = document.getElementById("show-2");
const show2 = document.getElementById("show-1");
const show3 = document.getElementById("show-4");
const show4 = document.getElementById("show-3");
const show5 = document.getElementById("show-6");
const show6 = document.getElementById("show-5");
const create = document.querySelector(".create1-3");
const hidden = document.querySelector(".hidden");
const hide = document.querySelector("#hide");
const rights = document.querySelectorAll(".right3-1");
const pri = document.querySelector(".pri");
const rights5 = document.querySelectorAll(".right5-1");
const rights7 = document.querySelectorAll(".right7-1");
const middle = document.querySelector(".middleOne");
const cls = document.querySelector(".close");
const middd = document.getElementById("pic3");
const mg2 = document.querySelector(".mg2");
const pro2 = document.getElementById("pro2");
const two = document.querySelector(".two") ;



const pics = [
    {img : "../assets/images/middle.jpeg" },
    {img : "../assets/images/middle2.jpeg" },
    {img : "../assets/images/middle3.jpeg" },
    {img : "../assets/images/middle4.jpeg" },
    {img : "../assets/images/middle5.jpeg" },
]

const mid = Math.floor(Math.random()*5);



rights5.forEach(right5 => {
right5.addEventListener("click", function(){
   middle.style.display = "flex";

   const mid = Math.floor(Math.random()*5);
   const on = Math.floor(Math.random()*255) ;
   const to = Math.floor(Math.random()*255) ;
   const bo = Math.floor(Math.random()*255) ;


middd.src = pics[mid].img ;
two.style.background = `linear-gradient(to bottom , rgb(${on}, ${to}, ${bo}) , rgb(42, 42, 42))`;

})
})


rights7.forEach(right7 => {
right7.addEventListener("click", function(){
   middle.style.display = "flex";

   const mid = Math.floor(Math.random()*5);
   const on = Math.floor(Math.random()*255) ;
   const to = Math.floor(Math.random()*255) ;
   const bo = Math.floor(Math.random()*255) ;


middd.src = pics[mid].img ;
two.style.background = `linear-gradient(to bottom , rgb(${on}, ${to}, ${bo}) , rgb(42, 42, 42))`;

})
})



cls.addEventListener("click", function(){
    middle.style.display = "none";
})


rights.forEach(right1 => {
    right1.addEventListener("click", () => {
        window.location.assign("popular.html");

      const see = right1.dataset.singer;
      const photo = right1.dataset.photo;

      pri.innerHTML  = see;
      document.getElementById("phto").src = photo;
       
       
    })
});





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


spotifyLogo.addEventListener("click", () => {
    window.location.reload();
})

homeCircle.addEventListener("click", () => {
    window.location.reload();
})


show1.addEventListener("click", function () {
    window.location.assign("singer.html");

})

show2.addEventListener("click", function () {
    window.location.assign("singer.html");

})

show3.addEventListener("click", function () {
    window.location.assign("album.html");

})

show4.addEventListener("click", function () {
    window.location.assign("album.html");

})

show5.addEventListener("click", function () {
    window.location.assign("radio.html");

})

show6.addEventListener("click", function () {
    window.location.assign("radio.html");

})

