//convert your age from "human years" to "dog years"
const myAge = 24;
//the first two year
let earlyYears = 2;
//reassign 
earlyYears *= 10.5;
// my age -2
let laterYears = myAge -2;
//reassign
laterYears *= 4;
//calculate age dog years
var myAgeDogYears = earlyYears +laterYears;
//my name
var myName = 'monaira'.toLowerCase();



console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeDogYears} years old in dog years`);
// output 
//My name is monaira. I am 24 years old in human years which is 109 years old in dog years
