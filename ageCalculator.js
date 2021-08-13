const ageCalculator = function(name, yearOfBirth, currentYear){
  let greeting = "";
  let age = currentYear - yearOfBirth;
  if(age===1){
    greeting = name + " is " + age + " year old.";
  }
  else{
    greeting = name + " is " + age + " years old."
  } 
  return greeting;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));