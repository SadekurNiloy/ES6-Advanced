const numbers = [1, 9, 17, 22];
function totalSum(number){
    const output = [];
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
        output.push(sum);
    }
    return output;
}
const sum = totalSum(numbers);
console.log(sum);
