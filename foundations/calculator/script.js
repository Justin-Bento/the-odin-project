const firstOperand = "";
const secondOperand = "";
const currentOperation = null;
const shouldResetScreen = false;

const display = document.querySelector(".output");
const currentOperationScreen = document.querySelector("[data-curent-operand]");
const previousOperand = document.querySelector("[data-previous-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClear = document.querySelector("[data-all-clear]");
const turnOn = document.querySelector("[data-on]");
const turnOff = document.querySelector("[data-off]");

/* ===================================================================================
    Calulator functionality
   ===================================================================================*/

numberButtons.forEach(grabNumber);
operationButtons.forEach(grabOperator);
allClear.addEventListener("click", clearCurrentOperand);
turnOff.addEventListener("click", turnOffCalulator);
turnOn.addEventListener("click", turnOnCalulator);
equalsButton.addEventListener("click", solveEquasion);

function opearte(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

function grabNumber(value) {
  value.addEventListener("click", () => {
    if (currentOperationScreen.textContent === "0" || false) return "";
    currentOperationScreen.textContent += value.textContent;
  });
}
function grabOperator(value) {
  // appens the text content of the button to the display.
  value.addEventListener("click", () => {
    currentOperationScreen.textContent += value.textContent;
  });
}

function clearCurrentOperand() {
  currentOperationScreen.textContent = "";
  previousOperand.textContent = "";
}
function turnOffCalulator() {
  // empties the textContent, removes the background color and alerts the user that the calulator is on.
  display.value = "";
  display.style.borderColor = "hsla(0, 0%, 86%, 0.6)";
  display.style.backgroundColor = "hsla(0, 0%, 86%, 0.2)";
  display.disabled = true;
  return alert(" is turnned off");
}
function turnOnCalulator() {
  // empties the textContent, removes the background color and alerts the user that the calulator is off.
  display.textContent = "";
  display.style.borderColor = "hsla(0, 0%, 86%, 0.6)";
  display.style.backgroundColor = "transparent";
  display.disabled = true;
  return alert(" is turnned off");
}

function solveEquasion() {
  let firstOperand = currentOperationScreen.textContent;
  previousOperand.textContent = Number(firstOperand);
}

/* ===================================================================================
    Footer Text
   ===================================================================================*/

const footer = document.querySelector("footer");
let footerLink = document.createElement("a");
link.classList.add("credits_link");
link.setAttribute("href", "https://github.com/Justin-Bento/project-calculator");
link.textContent = `Github: Justin Bento ©  ${new Date().getFullYear()}`;
document.querySelector("footer").appendChild(link);