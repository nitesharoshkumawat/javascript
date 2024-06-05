// Add the following to the container using only jacascript and the DOM methods.

// <p> with red text that says "Hey i`m a red"

let para = document.createElement("p");
para.innerText = "Hey i`m a red!";
document.querySelector("body").append(para);
para.classList.add("red");

// an <h3> with blue text that says "iam a blue h3";

let h3 = document.createElement("h3");
h3.innerText = "I`M a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

// a <div>  with a black border and pink background color with the following elements inside of it

let div = document.createElement("div");
document.querySelector("body").append(div);
div.classList.add("div");
let h1 = document.createElement("h1");
h1.innerText = "i`m div";
document.querySelector("div").append(h1);
let para1 = document.createElement("p");
para1.innerText = " MEE TOO"
document.querySelector("div").append(para1);

// Create a new input and button element on the page using javascript only. set the text of button to "Click me";

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

document.querySelector("body").append(input)
document.querySelector("body").append(button);

// Add following attributes to the elements:
// change placeholder value of input to "username";
// change the id of button to "btn"

input.setAttribute("placeholder", "username") ;
button.setAttribute("id", "btn");


//Access the btn using the querySelector and button id change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");


btn.classList.add("btnStyle");

// Create an h1 element on the page and set its text to "DOM practice" underline change its color to purple.





