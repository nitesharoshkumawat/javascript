let h1 = document.createElement("h1");
let input  = document.createElement("input");
let btn = document.createElement("button");
let ul = document.createElement("ul");





h1.innerText = "Todo App";
btn.innerText = "Add Task";
input.setAttribute("placeholder", "enter your task");


document.querySelector("body").append(h1);
document.querySelector("body").append(input);
document.querySelector("body").append(btn);
document.querySelector("body").append(ul);



btn.addEventListener("click", () => {
  let li = document.createElement("li");
  ul.appendChild(li);
  let inpValue = input.value ;
    li.innerText = inpValue;

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("class", "delete");
    button.classList.add("delete");
    li.appendChild(button);
    input.value = "";
    

    
});

ul.addEventListener("click", (Event) => {
  if(Event.target.nodeName == "BUTTON"){
    let listItem = Event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
})





// let delBtns =document.querySelectorAll(".delete");

// for(delbtn of delBtns){
//   delbtn.addEventListener("click", () =>{
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   })

// }

