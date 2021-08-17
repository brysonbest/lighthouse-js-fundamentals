//function that adds a new car with current date and speed, to an array
const carPassing = function (cars, speed) {
  let totalCars = cars;
  let car = {
      time: Date.now(),
      speed: speed
    }
  totalCars.push(car);
  return totalCars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));