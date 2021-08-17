//construct a function that outputs a range of numbers based on a start point, end point, and step value
const range = function(start, end, step){
  let rangeArray = [];
  if(start > end || start === undefined || end === undefined || step === undefined || step <= 0){
    return rangeArray;
  }
  else{
    let i = 0;
    for(i = start; i < (end + 1); i += step){
      rangeArray.push(i);
    }
    return rangeArray;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));