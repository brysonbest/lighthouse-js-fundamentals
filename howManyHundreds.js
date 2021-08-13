const howManyHundreds = function(number){
  let hundreds = 0;
  if(number<=99){
    hundreds = 0;
  }
  else{
    hundreds = (number - (number%100))/100;
  }
  return hundreds;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);