const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves){
  let parade = [0,0];
  let x = 0;
  let y = 0;
  for(const move of moves){
    if(move === "north"){
      y += 1;
    }
    if(move === "south"){
      y -= 1;
    }
    if(move === "east"){
      x += 1;
    }
    if(move === "west"){
      x -= 1;
    }
  }
  parade[0] = x;
  parade[1] = y;
  return parade;
}

console.log(finalPosition(moves));