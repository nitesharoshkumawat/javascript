// let gameSeq = [];
// let userSeq = [];

// let btns = [ "yellow", "red", "purple", "green"];

// let started  = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", () =>{
//   if(started == false){
//     console.log("game is started");
//     started = true;
//     levelUp();
//   };
// });

// function btnFlash(btn){
// btn.classList.add("white");

// setTimeout(function(){
//   btn.classList.remove("white");
// },1000);
// }

// let levelUp = () =>{
//   level++
//   h2.innerText = `Level ${level}`;
//   let randIdx = Math.floor(Math.random()*3);
//   let randColor = btns[randIdx];
//   let randBtn = document.querySelector(`.${randColor}`);
//   btnFlash(randBtn);
// };


let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("white");

  setTimeout(function () {
    btn.classList.remove("white");
  }, 1000);
}

let levelUp = () => {
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3); // Corrected to include all four buttons
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
  gameSeq.push(randColor); // Add the selected color to the game sequence
};





