const smartGarbage = function(trash, bins){
  if(trash === "waste"){
    bins.waste++;
  }
  if(trash === "recycling"){
    bins.recycling++;
  }
  if(trash === "compost"){
    bins.compost++;
  }
  return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));