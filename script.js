'use strict'; //shows errors in console and stops you from using var names that might be function names in future

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// FUNCTIONS -----------------------------------------------------------------------------
// function logger() {
//   console.log('My name is Ida');
// };

// // calling - running or invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// FUNCTIONS AND DECLARATIONS -------------------------------------------------------------

//function declaration
// they can be called before they are defined in a code

// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// };

// console.log(age1);

// //function expression


// const calcAge2 = function(birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1993);
// console.log(age1, age2);

// ARROW FUNCTIONS ----------------------------------------------

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// };

// console.log(yearsUntilRetirement(1993, 'Ida')); 

//FUNCTIONS CALLING OTHER FUNCTIONS ---------------------------------


// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3)); 

// REVIEWING FUNCTIONS--------------------------------------------------

// const calcAge = function(birthYear) {
//   return 2022 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
  
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   };
  
//   // return `${firstName} retires in ${retirement} years`
// };

// console.log(yearsUntilRetirement(1940, 'Ida'));

// INTRODUCTION TO ARRAYS -------------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // exercise with arrays
// const calcAge = function(birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]), 
//   calcAge(years[1]), 
//   calcAge(years[years.length - 1])
// ];
// console.log(ages);

// BASIC ARRAY OPERATIONS / METHODS ------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter'];

// //add elements
// const newLength = friends.push('Jay'); // push adds element to end of array

// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // unshift adds element to beginning of array
// console.log(friends);

// //remove elements
// const popped = friends.pop(); //removes last element of array / opposite of push
// console.log(friends);
// console.log(popped); // logs the removed element in pop

// const shifted = friends.shift(); //removes first element and returns the removed element
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf('Steven')); // returns the index of which this element is located in
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven')); // returns a boolean value of whether the value is included in the element or not
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); // includes does strict ==== so it doesn't include type coercion, so here the number 23 is in a string so it comes out as false

// if(friends.includes('Peter')) {
//   console.log('You have a friend called peter');
// }

// INTRODUCTION TO OBJECTS ------------------------------------------------------

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmetmann',
  age: 2022 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// DOT VS. BRACKET NOTATION -----------------------------------------------------

console.log(jonas.lastName); // dot
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]); //bracket
console.log(jonas['last' + nameKey]);

// const interstedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(jonas[interstedIn]);

// if(jonas[interstedIn]) {
//   console.log(jonas[interstedIn]);
// } else {
//   console.log('Wrong request. Choose between firstName, lastName, age, job and friends');
// };


jonas.location = 'Portugal';
jonas['twitter'] = '@asdsfd';
console.log(jonas);

// CHALLENGE

console.log(jonas.firstName, 'has', jonas.friends.length, 'friends, and his best friend is called', jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
