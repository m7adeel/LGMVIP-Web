const round_buttons = document.querySelectorAll(".round_button");
const del_buttons = document.querySelectorAll(".red_button");
const display = document.getElementById("display");
var num1 = "", num2 = "";
var op = "";
var turn1 = true;

function add() {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract() {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply() {
    return parseFloat(num1) * parseFloat(num2);
}

function divide() {
    return parseFloat(num1) / parseFloat(num2);
}

round_buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        if (button.id == "AC") {
            num1 = "";
            num2 = "";

            display.innerText = num1;
        }

        if (button.id == "DEL") {
            if (turn1) {
                num1 = "";
                display.innerText = num1;
            }
            else {
                num2 = "";
                display.innerText = num2;
            }
        }

        if (button.id >= "0" && button.id <= "9") {
            if (turn1) {
                num1 += button.id;
                display.innerText = num1;
            }
            else {
                num2 += button.id;
                display.innerText = num2;
            }
        }
        else {
            if (button.id == "dot") {
                if (turn1) {
                    num1 += ".";
                    display.innerText = num1;
                }
                else {
                    num2 += ".";
                    display.innerText = num2;
                }
            }
            else if (button.id != "equals") {
                op = button.id;
                turn1 = false;
            }
            else if (button.id == "equals"){
                var result = 0;
                if (op == "add")
                    result = add();
                else if (op == "subtract")
                    result = subtract();
                else if (op == "divide")
                    result = divide();
                else
                    result = multiply();

                display.innerText = result;
                num1 = "";
                num2 = "";
                turn1 = true;
            }
        }
    })
})