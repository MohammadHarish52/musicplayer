const music = new Audio('Music App Advanced Level/vande.mp3');
//create array
const songs = [
    {
        id:"1",
        songNAme:`On My Way <br>
        <div class="subtitle">ALan Walker</div>`,
        poster:"Music App Advanced Level/img/1.jpg"
    
    },
    {
        id:"2",
        songNAme:`Alan Walker -Fade <br>
        <div class="subtitle">ALan Walker</div>`,
        poster:"Music App Advanced Level/img/2.jpg"
    },
    {
        id:"3",
        songNAme:`Cartoon on & on  <br>
        <div class="subtitle">Daniel levi</div>`,
        poster:"Music App Advanced Level/img/3.jpg"
    },
    {
        id:"4",
        songNAme:`Warriyo - Mortals<br>
        <div class="subtitle">Mortals</div>`,
        poster:"Music App Advanced Level/img/4.jpg"
    },
    {
        id:"5",
        songNAme:`Ertugrul Gazi <br>
        <div class="subtitle">Ertrugul</div>`,
        poster:"Music App Advanced Level/img/5.jpg"
    },
    {
        id:"6",
        songNAme:`Electronic Music<br>
        <div class="subtitle">Electro</div>`,
        poster:"Music App Advanced Level/img/6.jpg"
    },
    {
        id:"7",
        songNAme:`Agar Tum Sath ho <br>
        <div class="subtitle">Tamasha</div>`,
        poster:"Music App Advanced Level/img/7.jpg"
    },
    {
        id:"8",
        songNAme:`Suna hai <br>
        <div class="subtitle">Neha kakkar</div>`,
        poster:"Music App Advanced Level/img/8.jpg"
    },
    {
        id:"9",
        songNAme:`Dilbar <br>
        <div class="subtitle">Satyameva Jayate/div>`,
        poster:"Music App Advanced Level/img/9.jpg"
    },
    {
        id:"10",
        songNAme:`Duniya <br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster:"Music App Advanced Level/img/10.jpg"
    },
    {
        id:"11",
        songNAme:`Lagdi Lahore Di <br>
        <div class="subtitle">Street Dancer</div>`,
        poster:"Music App Advanced Level/img/11.jpg"
    },
    {
        id:"12",
        songNAme:`Alan Walker -Fade <br>
        <div class="subtitle">ALan Walker</div>`,
        poster:"Music App Advanced Level/img/12.jpg"
    }, {
        id:"13",
        songNAme:`Bareishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"Music App Advanced Level/img/13.jpg"
    }, {
        id:"14",
        songNAme:`Vaaste <br>
        <div class="subtitle">Dhvani Bhansushali</div>`,
        poster:"Music App Advanced Level/img/14.jpg"
    }
    , {
        id:"15",
        songNAme:`Lut Gaye <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"Music App Advanced Level/img/15.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
   element.getElementsByTagName('img')[0].src = songs[i].poster;
   element.getElementsByTagName('h5')[0].innerHTML = songs[i].songNAme;
})
let masterPlay = document.getElementById('mastarplaster');
let Wave  = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener('click' , ()=>{
    if(music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    Wave.classList.add("active2");
    }else {
    music.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    Wave.classList.remove("active2");
    }
})
 
const makeallPlays = ()=> {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((element)=>{
           element.classList.add("fa-circle-play");
           element.classList.remove("fa-circle-pause");
     })   
       }  
       const makeBackgrounds = ()=> {
        Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
               element.style.background = "rgb(105,105,170,0)"
         })   
           }  
let index = 0;
let posterMasterplay = document.getElementById("poster-master-play");
let Title = document.getElementById("title");

Array.from(document.getElementsByClassName('playlistplay')).forEach((element)=>{
 element.addEventListener('click', (e)=>{
    index = e.target.id;
    makeallPlays();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    music.src = `Music App Advanced Level/audio/${index}.mp3`;
    posterMasterplay.src = `Music App Advanced Level/img/${index}.jpg`; 

    music.play();
    let songtitle = songs.filter((ele)=>{
    return ele.id = index;
    })
    songtitle.forEach(ele => {
        let {songNAme} = ele;
        Title.innerHTML = songNAme;
    })
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    Wave.classList.add("active2");
    music.addEventListener('ended' ,() =>{
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        Wave.classList.remove("active2");
    })
    makeBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
 })   
})

let currentstart = document.getElementById('Currentstart');
let currentend = document.getElementById('Currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , ()=>{
    let musiccurr = music.currentTime;
    let musicdur = music.duration;

    let min = Math.floor(musicdur/60);
    let sec = Math.floor(musicdur%60);
    if(sec<10){
        sec = `0${sec}`
    }

    currentend.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(musiccurr/60);
    let sec1 = Math.floor(musiccurr%60);
    if(sec<10){
        sec = `0${sec}`
    }

    currentstart.innerHTML = `${min1}:${sec1}`;

 let progressbar = parseInt((music.currentTime/music.duration)*100);
  seek.value = progressbar ;
  seekbar = seek.value;
  bar2.style.width = `${seekbar}`;
  dot.style.left =`${seekbar}`;
})

seek.addEventListener('change' , ()=>{
    music.currentTime = seek.value*music.duration/100;
})
music.addEventListener('ended' , ()=>{
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    Wave.classList.add("active2");
})

let volicon = document.getElementById('vol_icon');
let voldot = document.getElementById('vol_dot');
let vol = document.getElementById('vol')
let volbar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change' , ()=>{
    if(vol.value ===  0){
        volicon.classList.remove('fa-volume-high');
        volicon.classList.add('fa-volume-mute');
        volicon.classList.remove('fa-volume-low');
    }
    if(vol.value > 0){
        volicon.classList.remove('fa-volume-high');
        volicon.classList.remove('fa-volume-mute');
        volicon.classList.add('fa-volume-low');  
    }
    if(vol.value > 50){
        volicon.classList.add('fa-volume-high');
        volicon.classList.remove('fa-volume-mute');
        volicon.classList.remove('fa-volume-low');
    }
    let vol_a = vol.value;
    volbar.style.width = `${vol_a}%`
    voldot.style.left = `${vol_a}%`
    music.volume = vol_a/100;


})