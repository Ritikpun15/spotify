//  Declaring variarbles

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");
let audioElement = new Audio("Songs/1.mp3");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let masterImg = document.getElementById("masterImg");
let masterSong = document.getElementById("masterSong");
let playBtn = Array.from(document.getElementsByClassName("playBtn"));

let songs = [
  {
    songName: "Pehle Bhi Main - Animal",
    filePath: "Songs/1.mp3",
    coverPath: "images/Pehle Bhi Main.jpeg",
  },
  {
    songName: "Soulmate - Badshah X Arijit Singh ",
    filePath: "Songs/2.mp3",
    coverPath: "images/Soulmate.jpeg",
  },
  {
    songName: "Sprinter - Central Cee X Dave",
    filePath: "Songs/3.mp3",
    coverPath: "images/Sprinter.jpeg",
  },
  {
    songName: "Doja - Central Cee",
    filePath: "Songs/4.mp3",
    coverPath: "images/Doja.jpeg",
  },
  {
    songName: "Love Yourself - Justin Bieber",
    filePath: "Songs/5.mp3",
    coverPath: "images/Love Yourself.jpeg",
  },
  {
    songName: "Naina - Diljit Dosanjh, Ft- Badshah",
    filePath: "Songs/6.mp3",
    coverPath: "images/Naina.jpeg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

//  Play & Pause Button

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    masterSong.innerText = songs[songIndex].songName;
    masterImg.src = songs[songIndex].coverPath;
    playBtn[songIndex].classList.remove("fa-circle-play");
    playBtn[songIndex].classList.add("fa-circle-pause");
    if (songIndex == 0) {
      playBtn[songIndex].classList.remove("fa-circle-play");
      playBtn[songIndex].classList.add("fa-circle-pause");
    }
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    playBtn[songIndex].classList.remove("fa-circle-pause");
    playBtn[songIndex].classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//  Updating the progressbar

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
});

//  Changing the progressbar

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
  console.log(progressBar.value);
});

//  Playing songs from playist

const makesAllPlay = () => {
  playBtn.forEach((element) => {
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
  });
};

playBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    makesAllPlay();
    songIndex = parseInt(e.target.id);
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    e.target.classList.add("fa-circle-pause");
    e.target.classList.remove("fa-circle-play");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    audioElement.play();
    masterSong.innerText = songs[songIndex].songName;
    masterImg.src = songs[songIndex].coverPath;
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
  });
});

//  Changing songs through next button

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  makesAllPlay();
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  playBtn[songIndex].classList.remove("fa-circle-play");
  playBtn[songIndex].classList.add("fa-circle-pause");
  masterSong.innerText = songs[songIndex].songName;
  masterImg.src = songs[songIndex].coverPath;
  gif.style.opacity = 1;
});

//  Changing songs through previous button

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 5;
  } else {
    songIndex -= 1;
  }
  makesAllPlay();
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  playBtn[songIndex].classList.remove("fa-circle-play");
  playBtn[songIndex].classList.add("fa-circle-pause");
  masterSong.innerText = songs[songIndex].songName;
  masterImg.src = songs[songIndex].coverPath;
  gif.style.opacity = 1;
});
