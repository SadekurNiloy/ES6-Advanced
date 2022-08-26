// const products = [
//     {id: 1, name: 'laptop', price: 45000},
//     {id: 2, name: 'i-phone', price: 85000},
//     {id: 3, name: 'watch', price: 35000},
//     {id: 4, name: 'tablet', price: 25000}
// ]

// const productPrice = products.filter(product => product.price > 100000);
// console.log(productPrice);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'i-phone', price: 85000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 25000}
]

const productPrice = products.find(product => product.price > 10000);
console.log(productPrice);


const numbers = [23, 45, 65, 76, 90, 80, 30, 40];
const sum1 = numbers.map(number => number + 1);
const even = numbers.filter(number => number % 2 === 0);
const big = numbers.find(number => number > 10);

console.log(even);
console.log(big);

