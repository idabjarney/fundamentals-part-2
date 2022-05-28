'use strict';

// CODING CHALLENGE #1


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);


// const checkWinner = function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins won against Koalas with ${avgDolphins} - ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas won against Dolphins with ${avgKoalas} - ${avgDolphins}`);
//   } else {
//     console.log(`Neither team won with Dolphins scoring ${avgDolphins} and Koalas scoring ${avgKoalas}`);
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// // test 2

// avgDolphins2 = calcAverage(85, 54, 41);
// avgKoalas2 = calcAverage(23, 34, 27);

// checkWinner(avgDolphins2, avgKoalas2);

// CODING CHALLENGE #2 - ARRAYS -------------------------------------------------

// const bill = 100;

// // const calcTip = function(bill) {
// //   return bill >= 50 && bill <= 300
// //   ? bill * 0.15
// //   : bill * 0.20;
// // };

// const calcTip = bill => bill >= 50 && bill <= 300
// ? bill * 0.15
// : bill * 0.20;


// const bills = [
//   125,
//   555,
//   44
// ];

// const tip = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2])
// ];

// console.log(tip);

// const total = [
//   bills[0] + tip[0],
//   bills[1] + tip[1],
//   bills[2] + tip[2]
// ];
// console.log(total);

//  CODING CHALLENGE #3 - OBJECTS -----------------------------------------------

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
  
//   calcBMI: function() {
//     this.bmi = +(this.mass / this.height ** 2).toFixed(1);
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.96,
  
//   calcBMI: function() {
//     this.bmi = +(this.mass / this.height ** 2).toFixed(1);
//     return this.bmi;
//   }
// };

// console.log(mark.calcBMI(), john.calcBMI());

// if(mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// } else {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
// };