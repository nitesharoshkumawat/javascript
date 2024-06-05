// Create a function that prints a poem.

function poem(){
  console.log("twinkle twinkle little star who are wonder what you are ?");
};

poem();

// create  a function to roll a dice & always displays the value of the dice(1to6).

function diceRoll(){
  const dice = Math.floor(Math.random()*6)+1;
  console.log(dice);
};

diceRoll();

// Create a funtion that the multiplication table of a number.

function multiplication(n){
  for(let i = n; i<=n*10; i= i+2){
    console.log(i);
  };
};

multiplication(2);

// Create a function that gives us the average of 3 number.

function average(a, b, c){
  console.log((a+b+c)/3);
};

average(6, 45, 34);

// create a function that return the sum of numbers from 1 to n.

function sum(n){
  let sum =0;

  for(let i = 1; i<= n; i++){
    sum+=i;
  };
  return sum
};

console.log(sum(7));

// Create a function that return the concatenation of all strings in an arrays.
let str = [ "rahul", "nitesh", "sonali"]

function concatenation(str){
    let result;
  for(let i = 0; i<= str.length; i++){
    result+=str[i]
  }

   return result;
}

console.log(concatenation(str));


// Write a javascript function that returns array elements  larger than a number .

let array = [ 1, 3 , 4, 45, 45, 6, 34 , 363,  363, ,56, 3, 1,2,];
let num = 100

function lageraNum(array, num){

  for(let i =0; i < array.length; i++){
   
    if(array[i] > num){
      console.log(array[i]);
    }
  };
 

};

lageraNum(array, num);

// write  a javascript function that accepts a list of country a list of country names as input and returns the longest country name as output example : country = [ "Austrialia", "Germany", "United state of america",] out put: "unites state of america"

let country = ["Austrialia", "Germany", "Unites state of america"];

function longestName(country){

  let ansIdx=0

  for(let i = 0; i<country.length; i++){
    let anslen = country[ansIdx].length;
    console.log(anslen);
    let currlength = country[i].length;
    console.log(currlength)

  if(currlength > anslen){
    console.log(i);
    ansIdx = i;
  }
  }
  return country[ansIdx];
};

console.log(longestName(country));

// Write a javascript function to extract unique characters from a string Example str = "avsdfdskjfdgdsssdf" ans = "abcdefgh".

let str1 = "abcdasdfjgfhjka";

function getUnique(str1){
  let ans = ""

  for(let i = 0; i< str1.length; i++){
     currAns = str1[i];
     console.log(currAns);
     console.log(ans.indexOf());
     
      if(ans.indexOf(currAns) == -1){
        ans += currAns
      }

  }
  return ans;
};

console.log(getUnique(str1));

// write a javascript function to count the number of vowels in a string argument .

let vowels = "niteshkumawat";

function vowelsFind(){
  let count = 0;

  for(let i =0 ; i < vowels.length; i++){

    if(
      vowels.charAt(i)== "a" ||
      vowels.charAt(i)== "e" ||
      vowels.charAt(i)== "i" ||
      vowels.charAt(i)== "o" ||
      vowels.charAt(i)== "u" 
      
  ){
    count++
  }
  }
  return count

};

console.log(vowelsFind(vowels));

// write a javascript function to generete a random number within a range (start , end);
let start = 100;
let end = 200;

function genereteRandom(start, end){
  let diff = end - start;
  console.log(diff);
  return Math.floor(Math.random()*diff)+start;

};

console.log(genereteRandom(start, end));
