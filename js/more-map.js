// const numbers = [ 12, 54, 56, 78];
// const half = x => x/2;
// const halfMake = numbers.map(half);
// console.log(halfMake);


// shortcut way to find result

const numbers = [ 22, 44, 56, 78, 86]
const half = numbers.map(x => x/2)
console.log(half);


const friends = ['shadat', 'mithun', 'nayem'];
const firstletters = friends.map(friend => friend[0]);
const nameLengths = friends.map(friend => friend.length);

console.log(firstletters);
console.log(nameLengths)

/// practce another

// const products = [
//     {id: 1, name: 'laptop', price: 45000},
//     {id: 2, name: 'i-phone', price: 85000},
//     {id: 3, name: 'watch', price: 35000},
//     {id: 4, name: 'tablet', price: 25000}
// ]
// const productName = product => product.name;
// const items = products.map(productName);
// console.log(items);

const products = [
    {id: 1, name: 'laptop', price: 35000},
    {id: 2, name: 'mobile', price: 25000},
    {id: 3, name: 'button-phone', price: 5000}
]
const items = products.map(product => product.price);
console.log(items)

