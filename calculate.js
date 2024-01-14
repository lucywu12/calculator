
let calculations = [];

function add(b) {
    calculations.push(parseInt(calculations.slice(-1)) + parseInt(b));
    return calculations.slice(-1);
}

function subtract(b) {
    calculations.push(calculations.slice(-1) - b);
    return calculations.slice(-1);
}

function multiply(b) {
    calculations.push(calculations.slice(-1) * b);
    return calculations.slice(-1);
}

function divide(b) {
    if (b == 0) {
        output.textContent = "DIVIDE BY 0";
    }

    //need to add some rounding
    calculations.push(calculations.slice(-1) / b);
    return calculations.slice(-1);
}

function equals() {
    output.textContent = calculations.slice(-1);
    return calculations.slice(-1);
}

function del() {
    calculations.pop(); //remove last element
    nums[0] = calculations.slice(-1); //start a previous calculation
}

function clear() {
    nums = [];
    calculations = []; //empty array
    input.textContent = "";
    output.textContent = "";
}



//not entirely sure but maybe
function operate(first, operator, second) {
    if (operator == "+") {
        console.log("adding");
        nums[0] = add(second);
        console.log(nums[0]);
        console.log(calculations.slice(-1));
        nums.pop();
        nums.pop();
    } else if (operator == "-") {
        nums[0] = subtract(second);
        nums.pop();
        nums.pop();
    } else if (operator == "*") {
        nums[0] = multiply(second);
        nums.pop();
        nums.pop();
    } else if (operator == "/") {
        nums[0] = divide(second);
        nums.pop();
        nums.pop();
    } else {
        return "SYNTAX ERROR";
    }
}

//if calculate is NOT empty, call operate
//otherwise, add it to the calculations
//print to display regardless
const input = document.querySelector(".top");
const output = document.querySelector(".bottom");

let nums = [];

const button = document.querySelectorAll('.button');
button.forEach(function(btn) {
    btn.addEventListener('click', () => {
        if ((btn.textContent != "DEL") && (btn.textContent != "C")) {
            if (btn.textContent == "=") {
                if (calculations.length > 0) {
                    output.textContent = calculations.slice(-1); //update console
                } else {
                    return "SYNTAX ERROR";
                }
            } else {
                nums.push(btn.textContent); //add into array
                input.textContent += btn.textContent;
                if (nums.length != 3) {
                    if (calculations.length == 0) {
                        calculations.push(btn.textContent);
                    }
                } else {
                    console.log("operating");
                    operate(nums[0], nums[1], nums[2]);
                }
            }
        } else if (btn.textContent == "DEL") {
            input.textContent = input.textContent.slice(0, -1);
            if (btn.className == "num") {
                del(); //otherwise, for operators we won't need to remove
            }
        } else if (btn.textContent == "C") {
            clear();
        }
    });
});
