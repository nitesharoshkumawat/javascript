// conditional statement 

// create a treffic light system that shows what to do based on color ?

const color = "yellow";

if(color == "red"){
    console.log(`stop light color is${color}`);
}
else if(color === "yellow"){
    console.log(`go slow light color is ${color}`)

}else if(color == "green"){
    console.log(`go light color is  ${color}`);
}else {
    console.log("traffic light is broken");
};

// creat a system to calculate popcorn prices based on the size customer asked for ?

const size = "xl"

if(size == "xl"){
    console.log("xl price is 250 rupees")
}
else if(size == "l"){
    console.log("l price is 200 rupees")
}
else if(size == "m"){
    console.log("m price is 100 rupees")
}
else if (size == "s" ){
    console.log(" s price is 50 rupees")
}
else{
    console.log("The size is not available");
}

// Nesting if else


let marks = 35;

if(marks >= 33){
    if(marks >= 80){
        console.log(" grade :o");
    }
    else if(marks >= 60){
        console.log("grade : A")
    }
}
else{
    console.log(" bad luck try next time");
}

// A good string is a string  that starts with the letter a & has a length >3 write a programme  to find id a string is good or not ?


let str = "apple";

if(str[0] === "a" && str.length > 3 ){
    console.log(" good")
}
else {
    console.log(" not good string");
};

// predict the output of following code:

let num = 12;

if (num%3 === 0 && ((num+1 == 15) || (num - 1 == 11))){
    console.log("safe");
}else {
    console.log("unsafe");
};

// use switch statement to print the day of the week using a number varieable day with values 1 to 7.

let day = 6;

switch(day){
    case 1:
        console.log("its monday ");
        break;

        case 2:
        console.log("its tuesday ");
        break;
        case 3:
        console.log("its wensday ");
        break;
        case 4:
        console.log("its thursday ");
        break;
        case 5:
        console.log("its friday ");
        break;
        case 6:
        console.log("its saturaday ");
        break;
        case 7:
        console.log("its sunday ");
        break;
};

// Alert and prompt 
// prompt("ender your full name")
// prompt("enter your password");
// alert("wrong password");

// create a number variables num with some value 
// now print good if the number is divisible by 10 and print  bad if it is not ?

let num1 = 87;

if(num1%10 === 0){
    console.log("good");
}else{
    console.log("not good ");

};

//Take a user name and age as input using pompts 
// then return back  the following  statement  to the  user as an alert (by substituting by name and age)

// let name = prompt("enter your name");
// let age = prompt("enter your age");

// let nameAge = `welcome ${name} + ${age} `

// let alert1 = alert(nameAge);
// console.log(alert1);


// write a switch statement  to print the month  in a quater 

 let month = "quarter3";

 switch(month){
    case "quarter1": 
    console.log("january, february, march");
    break;
    case "quarter2": 
    console.log("april , may , june");
    break;
    case "quarter3": 
    console.log("july, augest, september");
    break;
    case "quarter4": 
    console.log("october, november, december");
    break;
    
 };


 // good string or not

 let str1 = "apple"

 if(str1[0] === "a" && str1.length > 5){
    console.log("golden string");
 }else{
    console.log(" not golden string");
 };
