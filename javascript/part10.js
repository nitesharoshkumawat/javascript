// Generate a random color.

// let h1 = document.createElement("h1");
// let button = document.createElement("button");
// let div = document.createElement("div");
// let h3 = document.createElement("h3");

// h1.innerText = "Generate a random color";
// h3.innerText = "This is your new color";
// button.innerText = "Click me"
// button.setAttribute("placeholder", "Generate color");
// document.querySelector("body").append(h1);
// document.querySelector("body").append(button);
// document.querySelector("body").append(div);
// document.querySelector("div").append(h3);

// div.classList.add("div");

// button.classList.add("btnstyle");
// button.classList.add("body");


// button.addEventListener("click", () => {
//   let random = getRandomColor();
//   h1.innerText = random;
//   div.style.backgroundColor = random;
// });

// const getRandomColor  = () => {
//   let red = Math.floor(Math.random()*255);
//   let green = Math.floor(Math.random()*255);
//   let blue = Math.floor(Math.random()*255);

//   let color = `rgb ${red}, ${green}, ${blue}`;
//   return color;   
// }




function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let h1 = document.createElement("h1");
let button = document.createElement("button");
let div = document.createElement("div");
let h3 = document.createElement("h3");

h1.innerText = "Generate a random color";
h3.innerText = "This is your new color";
button.innerText = "Click me";
document.querySelector("body").append(h1);
document.querySelector("body").append(button);
document.querySelector("body").append(div);
document.querySelector("div").append(h3);

div.classList.add("div");
button.classList.add("btnstyle");

button.addEventListener("click", () => {
  let random = getRandomColor();
  h1.innerText = random;
  div.style.backgroundColor = random;
});

// Try out the following events in Event Listener on your own:

let para  = document.createElement("p");

para.innerText = "i am event listner";

document.querySelector("body").append(para);

para.addEventListener("mouseout", () =>{
   let p = para.innerText  = "i am actully event listner";
   console.log(p)
});

// keypress 

let input = document.createElement("input");
let btn = document.createElement("button");

input.setAttribute("placeholder", "enter any key");
btn.innerText = "click me";

document.querySelector("body").prepend(input);
document.querySelector("body").prepend(btn);


input.addEventListener("keypress", () =>{
  let inp = input.setAttribute("placeholder", "i keypress");
  console.log(`place is changed ${inp}`);
   
})




