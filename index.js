// Code your solution in this file!
//const returnFirstTwoDrivers = function(par = [driver1, driver2]){
 //   return par[0,1];
//}
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(parameter){
    return function(fare){
        return fare * parameter;    
    }
}

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  
