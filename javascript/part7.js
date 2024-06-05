// write an arrow function that return the square of a number "n".

let n = 4


const square = (n) =>{
  return n*n;
};

console.log(square(n));


// Write a function that prints "hello world " 5 times at intervals of 2s each.

const id = setInterval(()=>{
  console.log("Hello World")
}, 2000);


setTimeout(() => {
  clearInterval(id);
}, 12000);

// write an arrow function named arrayAverage that accepts an array of number and return the average of those number .

let array = [17, 53, 34, 75,46];

const arrayAverage = (array) =>{

  let total = 0;
  for (let number of array){
    total += number
  }

     return (total)/array.length ;
};

console.log(arrayAverage(array));

// write an arrow function named isEven that takes a single nuber as argument and returns if it is even or not 

let isEven = (num) => {
  if(num % 2 == 0){
    console.log("even");
  }else{
    console.log("not even");
  }

} 

let num = 4
isEven(num)





