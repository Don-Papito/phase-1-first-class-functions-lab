// Code your solution in this file
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; 

const returnFirstTwoDrivers = function(){
    return drivers.slice(0, 2); 
}

returnFirstTwoDrivers();

const returnLastTwoDrivers = function(){
    return drivers.slice(2);
}

returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(fare){
        return fare * number; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
 }

