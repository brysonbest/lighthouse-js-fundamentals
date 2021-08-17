//concatenates two arrays into one
const concat = function(array1, array2){
  let newArray = [];
  for(let array of array1){
    newArray.push(array);
  }
  for(let array of array2){
    newArray.push(array);
  }
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

//concatenates two arrays into a new one, and sorts by ascending
const merge = function(array1, array2){
  let newArray = [];
  for(let array of array1){
    newArray.push(array);
  }
  for(let array of array2){
    newArray.push(array);
  }
  let i = 0;
  let sortedArray = newArray.sort();
  return sortedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);