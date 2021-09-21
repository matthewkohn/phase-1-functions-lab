// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - headquarters);  
}

function distanceFromHqInFeet(pickup) {
  let blocks = distanceFromHqInBlocks(pickup);
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(north, south) {
  let feet = Math.abs(north - south) * 264;
  return feet;
}

function calculatesFarePrice(north, south) {
  let distance = distanceTravelledInFeet(north, south);
  if (distance >= 2500) {
    return "cannot travel that far";
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance < 2000 && distance > 400) {
    distance -= 400;
    return distance * 0.02;
  } else if (distance <= 400) {
    return 0;
  }
}