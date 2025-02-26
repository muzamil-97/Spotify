console.log("hello  world");


const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const volume = document.getElementById("volume");
const right3 = document.querySelector("right3");
const lists2 = document.querySelectorAll(".right7-1");
const high = document.querySelector("#high");
const lists = document.querySelectorAll(".right5-1");
const bottom1 = document.querySelector(".bottom1-1");
const songName = document.querySelector("#songName");
const imagee = document.querySelector("#image");
const artistName = document.querySelector("#artistName");
const previous = document.getElementById("pre");
const next = document.getElementById("next");
const all = document.querySelector(".all");


const items = [
    {name : "Bachke Bachke" , artist : "Karan Aujla" , img : "../assets/images/punjabi/punjabi1.jpeg" , src : "../assets/songs/Bachke-Bachke-Karan-Aujla.mp3"},
    {name : "Haye Juliet" , artist : "Diljit Dosanjh" , img : "../assets/images/punjabi/punjabi2.jpeg" , src : "../assets/songs/Haye-Juliet-Diljit-Dosanjh.mp3"},
    {name : "Joker" , artist : "Hardy Sandhu" , img : "../assets/images/punjabi/punjabi3.jpeg" , src : "../assets/songs/Joker-Hardy-Sandhu.mp3"},
    {name : "Cheques" , artist : "Shubh" , img : "../assets/images/punjabi/punjabi4.jpeg", src : "../assets/songs/Cheques - Shubh.mp3"},
    {name : "Wavy" , artist : "Karan Aujla" , img : "../assets/images/punjabi/punjabi5.jpeg" , src : "../assets/songs/Wavy - Karan Aujla.mp3"},
    {name : "My Terrible Mind" , artist : "Talha Anjum, Umair" , img : "../assets/images/img2/mind.jpeg" , src : "../assets/songs/5am In Lahore Talha Anjum (pagalall.com).mp3"},
    {name : "Jo Tum Mera Ho" , artist : "Anuv Jain" , img : "../assets/images/img2/tum.jpeg" , src : "../assets/songs/Jo Tum Mere Ho - Anuv Jain 128 Kbps.mp3"},
    {name : "Glory" , artist : "Yo Yo Honey Singh" , img : "../assets/images/img2/glory.jpeg" , src : "../assets/songs/6 Am - Glory 128 Kbps.mp3"},
    {name : "Making Memories" , artist : "Karan Aujla, Ikky" , img : "../assets/images/img2/memory.jpeg" , src : "../assets/songs/What - Making Memories 128 Kbps.mp3"},
    {name : "Jhol" , artist : "Mannu, Annural Khalid" , img : "../assets/images/img2/jhol.jpeg" , src : "../assets/songs/Jhol(KoshalWorld.Com).mp3"}
];

let currentIndex = 0;

song.src = items[currentIndex].src;

next.addEventListener("click", function(){
    currentIndex++;

    if(currentIndex >= items.length){
        currentIndex = 0;
    }


    songName.innerHTML  = items[currentIndex].name ;
    artistName.innerHTML = items[currentIndex].artist;
    imagee.src = items[currentIndex].img;
    song.src = items[currentIndex].src;
    song.play();

    if(ctrlIcon.classList.contains("fa-play")){
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
})



previous.addEventListener("click", function(){
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = 9;
    }

    songName.innerHTML  = items[currentIndex].name ;
    artistName.innerHTML = items[currentIndex].artist;
    imagee.src = items[currentIndex].img;
    song.src = items[currentIndex].src;
    song.play();

    if(ctrlIcon.classList.contains("fa-play")){
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play")
    }
})

song.addEventListener("ended", function(){
    next.click();
})

lists.forEach(list => {
    list.addEventListener("click", ()=> {
        const imageSrc = list.dataset.image;
        const song2 = list.dataset.song;
        const singer = list.dataset.singer;
        let adio = list.dataset.audio; 

        imagee.src = imageSrc;
        songName.innerHTML = song2;
        artistName.innerHTML = singer;
        song.src = adio;
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        
    })
})

lists2.forEach(list2 => {
    list2.addEventListener("click", function(){
        const imageSrc2 = list2.dataset.image;
        const song3 = list2.dataset.song;
        const singer2 = list2.dataset.singer;
        let adio = list2.dataset.audio; 

        imagee.src = imageSrc2;
        songName.innerHTML = song3;
        artistName.innerHTML = singer2;
        song.src = adio;
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    })
})


song.addEventListener("onloadedmetadata",()=> {
    progress.max = song.duration;
    progress.value = song.currentTime;
    volume.value = song.volume;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
})

volume.addEventListener("input", ()=>{
    if(volume.value == 0 ){
        high.classList.remove("fa-volume-high");
        high.classList.add("fa-volume-off");
        song.volume = volume.value ;
    }else if(volume.value != 0 ){
        high.classList.add("fa-volume-high");
        high.classList.remove("fa-volume-off");
        song.volume = volume.value;
    }
    song.volume = volume.value ;
})

high.addEventListener("click", ()=> {
    if(high.classList.contains("fa-volume-high")){
        high.classList.remove("fa-volume-high");
        high.classList.add("fa-volume-off");
        volume.value = 0;
        song.volume = 0;
    }else if(high.classList.contains("fa-volume-off")){
        high.classList.remove("fa-volume-off");
        high.classList.add("fa-volume-high");
        volume.value = 1;
        song.volume = 1;
    }
})

song.addEventListener("timeupdate", ()=> {
    const bar = (song.currentTime/song.duration) * 100;
    progress.value = bar;
    progress.style.background = `linear-gradient(to right , #49f31fe1 0%, #49f31fe1 ${bar}% , 
    #838282 ${bar}% , #838282 100%)` ;
});

progress.addEventListener("change", function(){
    song.currentTime = (progress.value / 100)* song.duration;
})

progress.addEventListener("input", function(){
    let time = (progress.value / 100) * song.duration;
    song.currentTime = time;
    song,duration = progress.value;
});

progress.addEventListener("click", (e)=> {
    const width = progress.clientWidth;
    const clientX = e.offsetX;
    const duration = song.duration;

    song.currentTime = (clientX / width) * duration;
})

function pauseIcon(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = (song.currentTime / song.duration) * 100;
    },0)
}

progress.addEventListener("onchange", ()=> {
    song.play();
    song.currentTime = progress.value;
    song.duration = progress.max;

})

all.addEventListener("click", ()=>{
    document.querySelector(".right2").style.display = "none";
    document.querySelector(".right3").style.display = "none";
})


document.querySelector(".music").addEventListener("click", ()=>{
    document.querySelector(".right2").style.display = "none";
    document.querySelector(".right3").style.display = "none";
})


window.onload = function(){
    history.pushState(null,null,location.href);
    window.onpopstate = function(){
        history.go(1);
    }
}

function logout(){
    sessionStorage.clear();

    window.location.href = "index.html";

    history.pushState(null,null,"index.html")

    window.onpopstate = function(){
        history.go(1);
    }
}





