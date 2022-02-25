// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice((drivers.length - 2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  }
}

const fareDoubler = function (num) {
  return num * 2;
}

const fareTripler = function(num2) {
  return num2 * 3;
}

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(array);
}
// console.log(returnLastTwoDrivers(['pete', 'caroline', 'ben', 'me', 'you']));