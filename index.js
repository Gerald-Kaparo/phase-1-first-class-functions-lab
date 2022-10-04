// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(driversArray) {
    let frst2drvr = [...driversArray.slice(0, 2)];
    return frst2drvr;
}

const returnLastTwoDrivers = function(driversArray) {
    let lst2drvr = [...driversArray.slice(driversArray.length - 2)];
    return lst2drvr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(farargument = 3) {
        return farargument * int;
    }
}

const fareDoubler = function(farargument) {
    return createFareMultiplier(2)(farargument);
}

const fareTripler = function(farargument) {
    return createFareMultiplier(3)(farargument);
}

function selectDifferentDrivers(driversArray, fxn) {
    return fxn(driversArray);
}