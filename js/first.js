const perameter = (first, second = 10) => first + second;
const pushNumber = perameter(10, 20);
console.log(pushNumber);

// default parameter
function total(first, second = 20) {
    const sum = first + second;
    return sum;
}
const sum = total(10, 10);
console.log(sum)

// destructuring
const [a, b, c, ...r] = [12, 32, 43, 54, 65, 76, 90]
console.log(a, b, c, ...r)

//spred
const details = {name: 'sadik', age: 23, profession: 'student'  }
const newDetails = {...details, learning: 'web-developing'};
console.log(newDetails)