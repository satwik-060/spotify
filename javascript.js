let songIndex = 0;
let audioElement = new Audio("resources/songs/Alexander Rybak – Fairytale.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("song"));
let songs = [
  {
    songName: "Alexander Ryback - [Fairy Tale]",
    filePath: "resources/songs/Alexander Rybak – Fairytale.mp3",
    coverPath: "resources/songcovers/fairytale.jpg",
  },

  {
    songName: "Lewis Capaldi - [Someone You Loved]",
    filePath: "resources/songs/Lewis Capaldi - Someone You Loved.mp3",
    coverPath: "resources/songcovers/someoneyouvloved.jpg",
  },

  {
    songName: "Lindsey Stirling - [Carol Of Bells]",
    filePath: "resources/songs/Lindsey Stirling - Carol of the Bells (Official Video).mp3",
    coverPath: "resources/songcovers/carol of bells.jpg",
  },

  {
    songName: "Attack on Titan - [Sasageyo]",
    filePath: "resources/songs/Linked Horizon - Shinzou wo Sasageyo [VOSTFR].mp3",
    coverPath: "resources/songcovers/sasageyo.jpg",
  },

  {
    songName: "NF - [The Search]",
    filePath: "resources/songs/NF - The Search.mp3",
    coverPath: "resources/songcovers/the search.jpg",
  },
  {
    songName: "Shawn Mendes - [There's Nothing Holding Me Back]",
    filePath: "resources/songs/Shawn Mendes - There s Nothing Holding Me Back.mp3",
    coverPath: "resources/songcovers/There's nothing holding me back.jpg",
  },
  {
    songName: "Demon Slayer - [Tanjiro Vs Rui]",
    filePath: "resources/songs/TANJIRO VS RUI THEME.mp3",
    coverPath: "resources/songcovers/tanjiro vs rui theme.jpg",
  },
  {
    songName: "The Script - [Hall Of Fame]",
    filePath: "resources/songs/The Script - Hall Of Fame.mp3",
    coverPath: "resources/songcovers/Hall of fame.jpeg",
  },
  {
    songName: "The Weekend - [Blinding Lights]",
    filePath: "resources/songs/The Weeknd - Blinding Lights.mp3",
    coverPath: "resources/songcovers/Blinding Lights.png",
  },
  {
    songName: "Tokyo Ghoul - [Unravel]",
    filePath: "resources/songs/TK from 凛として時雨 『unravel』 Music Video(Full Size).mp3",
    coverPath: "resources/songcovers/Unravel.png",
  },
];
songItems.forEach((element,i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//managing playing bar
audioElement.addEventListener('timeupdate',()=>{
  let progress = 0 ;
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value= progress;
    // myProgressBar.style.transition = "0.1s";
  });
  
  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })
  //managed playing bar
  
  //making every song play and pause button
  function makeAllPlays(){
  Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.src = "resources/play.svg";  
  })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
  element.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      makeAllPlays();
      songIndex = parseInt(element.id);
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = "1";
      element.src = "resources/pause.svg";
      masterplay.src = "resources/pause.svg";
    }
    else{
      audioElement.pause();
      element.src = "resources/play.svg";
      masterplay.src = "resources/play.svg";
      gif.style.opacity = "0";
    }
  })
})

//Handling play/pause click
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.src = "resources/pause.svg";
        document.getElementsByClassName("songplay")[songIndex].src = "resources/pause.svg";
        gif.style.opacity = "1";
    }
    else
    {
        audioElement.pause();
        masterplay.src = "resources/play.svg";
        document.getElementsByClassName("songplay")[songIndex].src = "resources/play.svg";
        gif.style.opacity = "0";
    }
    
})
//Handled play/pause click 

//made every song play and pause button 

//making next and previous buttons 
document.getElementById('nextsong').addEventListener('click',()=>{
  if(songIndex>=9)
  {
    songIndex = 0;
  }
  else
  {
    // element.src = "resources/pause.svg";
    songIndex+=1;
  }
  makeAllPlays();
  document.getElementsByClassName("songplay")[songIndex].src = "resources/pause.svg";
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.src = "resources/pause.svg";
})
document.getElementById('previoussong').addEventListener('click',()=>{
  if(songIndex<=0)
  {
    songIndex = 9;
  }
  else
  {
    songIndex-=1;
  }
  makeAllPlays();
  document.getElementsByClassName("songplay")[songIndex].src = "resources/pause.svg";
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.src = "resources/pause.svg";
})
//made next and previous buttons 