//judges vegetables based on given metric
const judgeVegetable = function (vegetables, metric) {
  let submitter = "";
  let measure = 0;
  for(let veggie of vegetables){
    if(veggie[metric] > measure){
        submitter = veggie.submitter;
        measure = veggie[metric];
    }
  }
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));