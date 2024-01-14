
let calculations = [];

function add(b) {
    calculations.push(calculations.slice(-1) + b);
}

function subtract(b) {
    calculations.push(calculations.slice(-1) - b);
}

function multiply(b) {
    calculations.push(calculations.slice(-1) * b);
}

function divide(b) {
    if (b == 0) {
        return "DIVIDE BY 0";
    }

    //need to add some rounding
    calculations.push(calculations.slice(-1) / b);
}

function equals() {
    return calculations.slice(-1);
}

function del() {
    calculations.pop(); //remove last element
}

function clear() {
    calculations = []; //empty array
}



//not entirely sure but maybe
function operate(first, operator, second) {
    if (operator == "+") {
        add(second);
    } else if (operator == "-") {
        subtract(second);
    } else if (operator == "*") {
        multiply(second);
    } else if (operator == "/") {
        divide(second);
    }
}

//if calculate is NOT empty, call operate
//otherwise, add it to the calculations
//print to display regardless

