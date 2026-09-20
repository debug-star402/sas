const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;

function calculate(a, b, operation){
    return operation(a, b);
}
console.log(calculate(1, 2, substraction));