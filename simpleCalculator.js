const calculator = (a, operator, b) => {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;

        default: return "Operator is invalid"
    }
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "-", 5));
console.log(calculator(10, "*", 5));
console.log(calculator(10, "/", 5));