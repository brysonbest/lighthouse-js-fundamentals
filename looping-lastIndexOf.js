// a function that determines if a value is in an array, and where in the array it last occured; returns -1 if it does not occur
const lastIndexOf = function(array, value){
  let count = -1;
  let i = 0;
  for(i = 0; i < array.length; i++){
    if(array[i] === value){
      count = i;
    }
  }
  return count;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);