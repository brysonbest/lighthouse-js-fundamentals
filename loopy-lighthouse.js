// a function that loops through 100 to 200 and outputs words based on specific criteria
let number = 100;
for(number=100; number<=200; number++){
  if(((number%3)===0)&&((number%4)===0)){
    console.log("LoopyLighthouse");
  }
  else if((number%3)===0){
    console.log("Loopy");
  }
  else if((number%4)===0){
    console.log("Lighthouse");
  }
  else{
    console.log(number);
  }
}

// a function that performs the same loops with custom input of range, the multiples to search for, and words to replace
const loopyLighthouse = function(range, multiples, words){
  let number = 0;
  for(number = range[0]; number <= range[1]; number++){
    if((number % multiples[0] === 0) && (number % multiples[1] === 0)){
      console.log(words[0] + words[1]);
    }
    else if(number % multiples[0] === 0){
      console.log(words[0]);
    }
    else if(number % multiples[1] === 0){
      console.log(words[1]);
    }
    else{
      console.log(number);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);