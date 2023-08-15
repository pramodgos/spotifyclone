console.log("Welcome TO Spotify");
// intiliaze the variables
let songIndex = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let song =[
    
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    
] 


let audioElement = Audio('1.mp3');
// audioElement.play();
// listen to event
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log
})