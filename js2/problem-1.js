// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = odd => odd + 1;
const even = oddNumbers.map(evenNumbers);
console.log(even);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers.filter(number => number % 10 === 0);
const divisible10 = numbers.find(number => number % 10 === 0);
console.log(divisibleBy10);
console.log(divisible10);


// 3) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.

