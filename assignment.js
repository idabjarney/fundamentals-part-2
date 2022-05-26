// FUNCTIONS -------------------------------------------------------

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and it's capital city is ${capitalCity}`
// };

// const describeCountry1 = describeCountry('Iceland', '350 thousand', 'Reykjavik');
// console.log(describeCountry1);

// const describeCountry2 = describeCountry('England', '55 million', 'London');
// console.log(describeCountry2);

// const describeCountry3 = describeCountry('Japan', '125 million', 'Tokyo');
// console.log(describeCountry3);

// FUNCTION DECLARATIONS VS EXPRESSIONS ---------------------------------

// const calculatePercentage = function percentageOfWorld1(population) {
//   return population / 7900 * 100;
// };
// const ukPopulation = percentageOfWorld1(58);
// console.log(ukPopulation);

// const icelandPopulation = percentageOfWorld1(0.35);
// console.log(icelandPopulation);

// const japanPopulation = percentageOfWorld1(125);
// console.log(ukPopulation);

// const calculatePercentage = function percentageOfWorld2(population) {
//   return population / 7900 * 100;
// };

// const ukPopulation2 = calculatePercentage(58);
// console.log(ukPopulation2);

// const icelandPopulation2 = calculatePercentage(0.35);
// console.log(icelandPopulation2);

// const japanPopulation2 = calculatePercentage(125);
// console.log(ukPopulation2);


// ARROW FUNCTIONS -----------------------------------------------------------

// const calculatePercentage = population => population / 7900 * 100;
// // const ukPopulation = calculatePercentage(58);
// // console.log(ukPopulation);

// //FUNCTIONS CALLING OTHER FUNCTIONS ---------------------------------

// const describePopulation = function describePopulation(country, population) {
//   const percentage = calculatePercentage(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
//   console.log(description);
// };

// console.log(describePopulation('China', 144));

// INTRODUCTION TO ARRAYS -------------------------------------------------

// const population = [144, 55, 10, 83];

// const calculatePercentage = function percentageOfWorld1(population) {
//   return population / 7900 * 100;
// };

// const percentages = [
//   calculatePercentage(population[0]),
//   calculatePercentage(population[1]),
//   calculatePercentage(population[2]),
//   calculatePercentage(population[3]),
// ];

// console.log(percentages);


// BASIC ARRAY OPERATIONS / METHODS ------------------------------------------

// const neighbors = [
// 'Denmark', 
// 'Norway', 
// 'Sweden'
// ];
// console.log(neighbors);

// neighbors.push('Utopia');
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// // neighbors.push('Germany');

// const isGermanyNotNeighbor = !neighbors.includes('Germany')

// if(isGermanyNotNeighbor) {
//   console.log('Country probably not located in central Europe');
// };

// neighbors[neighbors.indexOf('Sweden')] = 'Republic of Sweden';
// console.log(neighbors);

// INTRODUCTION TO OBJECTS ------------------------------------------------------

// const myCountry = {
//   country: 'Iceland',
//   capital: 'Reykjavik',
//   language: 'icelandic',
//   population: '350 thousand',
//   neighbors: 'none'
// };