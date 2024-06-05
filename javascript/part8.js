// Check if all number in our array are mutiple of 10 0r not .

const { Result } = require("postcss");

const arr = [10, 40, 30, 47 ,30, 90 ];

let mutiple = (arr) => {
  // if(arr % 10 == 0){
  //   console.log("mutiple of 10|");
  // }else{
  //   console.log("not");
  // };

  // let multi =arr.map((arr) => arr % 10 == 0);
  // return multi;

  let num = arr.every((arr) => arr% 10 == 0);
  return num
};

console.log(mutiple(arr));

// Create a function to find the min number in an array.

const min = [42, 34, 2, 5, 4 , 345,45];

let minNum = min.reduce((res, el) => {
      if(res < el){
        return res;

      }else{
        return el;
      }
    })


console.log(minNum);

// Square and sum the array elements using the arrow function and then find the average of the array .

const arry = [1, 8, 8,9, 3, 4,5 ,6,0,78,43];

let calcu = (arry) =>{
  let Square = arry.map((sq) => sq*sq);
  console.log(Square);
  let sum = arry.reduce((sum, el) => sum+el)
  console.log(sum);
  let average = sum/arry.length;
  console.log(average);
};

calcu(arry);

// Create new array using the map function whose each element is equal to the original element plus 5.

const array = [8, 4, 5, 4, 4,];

const newArray = array.map((arr) => arr+5);
console.log(newArray);

//  Create a new array whose elements are in uppercase of word present in the original array.

const arr1 = ["nitesh", "rahul", "ram"];

let newArra = arr1.map((arr) => arr.toUpperCase());
console.log(newArra);

// write a function called mergeObject that accepts two objects and returns a new objects which contains all the keys and values of the first object and second object.

let obj1 = { a:1, b:2}
let obj2 = { c:3, d:4}

const mergeObject = (obj1, obj2) =>{
  let obj3 = {...obj1, ...obj2};
  console.log(obj3)
  return obj3;
};

console.log(mergeObject(obj1, obj2));

// Write a function called doubleAndReturnArgs which accepts an arrays and a variable number of arguments the function should return a new array with the original array values  and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) =>{
  
  let arre = [
  ...arr,
  ...args.map((v) => v*2),
]

return arre;

};


console.log(doubleAndReturnArgs([1, 2, 3], 4,4));
console.log(doubleAndReturnArgs([2], 10, 4));


