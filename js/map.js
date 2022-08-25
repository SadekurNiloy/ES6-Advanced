// const numbers = [2, 6, 8, 3, 7];
// const output = [];
// for(const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output)

//Way number- 1:
// const numbers = [2, 6, 8, 3, 7];
// function getDoubles(numbers) {
//     const output = [];
//     for(const number of numbers) {
//         const doubled = number * 2;
//         output.push(doubled);
//     }
//     return output;
    
// }

// const result = getDoubles(numbers);
// console.log(result)




// Way Number-2

// const numbers = [2, 6, 8, 3, 7];
// function getDoubles(numbers) {
//     const output = [];
//     for(const number of numbers) {
//         const doubled = doubledIt(number);
//         output.push(doubled);
//     }
//     return output;
    
// }
// // only change multiply here...
// function doubledIt(number) {
//     return number * 2;
// }
// const result = getDoubles(numbers);
// console.log(result)



// way number 3

// const numbers = [2, 6, 8, 3, 7];
// function getDoubles(numbers) {
//     const output = [];
//     for(const number of numbers) {
//         const doubled = oldDoubleIt(number);
//         output.push(doubled);
//     }
//     return output;
    
// }
// const oldDoubleIt = number => number * 2;
// const result = getDoubles(numbers);
// console.log(result)


// emni hoday koreci

// for(let i = 0; i <numbers.length; i++) {
//     const index = i;
//     const element = numbers[i];
//     console.log(index, element)
// }

// practice

// const numbers = [2, 3, 5, 6, 7, 8];
// function getTripple(number) {
//     const output = [];
//     for(const number of numbers) {
//         // const Tripple = number * 3;
//         const Tripple = trippleNumber(number);
//         output.push(Tripple)
//     }
//     return output;
   
// }
// function trippleNumber(number) {
//     return number * 3;
// }
// const result = getTripple(numbers);
// console.log(result)

//...............................
// practce shortcut way same result
//.................................

// const numbers = [2, 3, 5, 6, 7];
// const getDoubles = number => number * 2; // similar to function called arrow function
// const doubled = numbers.map(getDoubles); // shortcut way to return 
// console.log(doubled)


const numbers = [2, 3, 4, 5, 6, 7];
function getTripple(number) {
    const output = [];
    for(const number of numbers) {
        const tripple = number * 4;
        output.push(tripple);
    }
    return output;
}
const result = getTripple(numbers);
console.log(result)






