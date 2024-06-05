let favMovie = "avatar";

let guess = prompt("guess your the movie name");

while((guess != favMovie)&& (guess != "quit")){
 
  guess = prompt("Wrong guess try again! ");
};


if(guess == favMovie){
  guess = prompt("congratulation");
}else{
  console.log("quit");
};


