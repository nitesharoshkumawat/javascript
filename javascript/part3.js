// for the give string

let msg = "help!";

// trim it & convert it to uppercase

let changeUpperCase =msg.trim().toUpperCase();

console.log(changeUpperCase);

//For the string -> let name = "apnacollage ", predict the output for follwing 

let name = "apnabhai";

console.log(name.length);

console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("apna", "our"));


// separate the "collage " part in above string & replace  "l" with "t" in it.


let str = "collage";

console.log(str.replace("l" , "t"));

//For the given start state of an arry change it to final form using methods.

let start = ["january", "july", "march", "august"]

start.shift();
start.shift();

console.log(start);

start.unshift("july", "june");


console.log(start);

//For given start state of an array change it to final it to final form using splices .

let month = ["january", "july", "march", "august"];

month.splice(0,2, "july", "june");

console.log(month);

// Return the index of the "javascript" from the given array if it was reversed.

let langague = ["c", "c++", "html", "css", "javascript", "python", "java", "c#", "sql"];

langague.reverse();

console.log(langague.indexOf("javascript"));

// Write a jacascript program to get the first n elements of an array [ n can be any posotive number] for example for array [7,9 ,0,-4] and n=3 print[7 , 9 ,0]

let num = [3, 5, 7, -9];
let n =3

let ans = num.slice(0, n);
console.log(ans)
console.log(num);

 num.splice(3);

console.log(num);

// Write a jacascript program to get the first n elements of an array [ n can be any posotive number] for example for array [7,9 ,0,-4] and n=3 print[9 ,0, -4]

let num2 = [7 , 9 ,0 ,-4]
let n2 = 3;

let ans2 = num2.slice(num2.length-n);
console.log(ans2);

