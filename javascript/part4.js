// print all odd number (1 to 15).

for (let i = 1; i<=15;  i = i+2){
  console.log(i);
};

// print all even number (0 to 20).

for (let i = 0; i <= 20 ; i=i+2){
  console.log(i);
};


// Print the multiplication table for 5.

for(i = 5 ; i<=50; i = i+5){
  console.log(i);
};


const student = [
  ["rahul", 70],
   ["ram", 89]
]


for(let i=0; i < student.length; i++){
  console.log(i, student[i]);

  for(let j=0; j < student[i].length; j++){
    console.log(j, student[i][j]);
  };
};


