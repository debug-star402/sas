let num1;
let num2;
let operator;

switch (operator){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 == 0)
            console.log("Error: division not allowed");
        else
            console.log(num1 / num2);
        break;
}