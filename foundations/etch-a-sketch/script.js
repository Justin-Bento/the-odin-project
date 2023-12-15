const colorPicker = '';
const defaultColor = "black";
const defaultSize = 16;

const app = document.createElement("header");
const headline = document.createElement("h1");
const supporting = document.createElement("p");
const message = document.createElement("p");
const surface = document.createElement("main");
const actionsContainer = document.createElement("div");
const switchColorButton = document.createElement("input");
const rainbowModeButton = document.createElement("button");
const clearScreenButton = document.createElement("button");
const customSurfaceButton = document.createElement("button");
const switchColorBtn = document.createElement("input");
// Created html elemnts

headline.textContent = "Project: Etch A Sketch";
supporting.textContent = "Build A browser version of an Etch-A-Sketch where you can draw a with your mouse, change colors, and erase the drawing when you're done";
rainbowModeButton.textContent = "Rainbow";
clearScreenButton.textContent = "Clear";
customSurfaceButton.textContent = "Grid";

switchColorButton.setAttribute("type", "color");

actionsContainer.classList.add("actions");
rainbowModeButton.classList.add("rainbowModeButton");
switchColorButton.classList.add("switchColorValue");
clearScreenButton.classList.add("clearScreenButton");
customSurfaceButton.classList.add("customSurfaceButton");
message.classList.add("message");

document.body.appendChild(app);
document.querySelector("header").appendChild(headline);
document.querySelector("header").appendChild(supporting);
document.querySelector("header").appendChild(message);
document.body.appendChild(surface);
document.body.appendChild(actionsContainer);
document.querySelector(".actions").appendChild(switchColorButton);
document.querySelector(".actions").appendChild(rainbowModeButton);
document.querySelector(".actions").appendChild(clearScreenButton);
document.querySelector(".actions").appendChild(customSurfaceButton);

/*================================
  Code Starts Here
==================================*/

// Event Listeners are at the top to define actions for a user.

document.querySelector(".rainbowModeButton").addEventListener("click", fillSquareColour);
document.querySelector(".clearScreenButton").addEventListener("click", clearScreen)
document.querySelector(".customSurfaceButton").addEventListener("click", () => {
  let size = getSize()
  createBoard(size)
})

// Included the code and logic.

function createBoard(size) {
  let board = document.querySelector("main");
  board.style.display = `grid`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", div);
  }
}
createBoard(16)

function getSize() {
  let input = window.prompt("Select a new size for the sketchpad");
  if (input = "") {
    message.textContent = "Provide a number"
  } else if (input < 0 || input > 100) {
    message.textContent = "Provide a number between 1 and 100"
    return getSize(input)
  } else {
    message.textContent = "Have fun :)"
    return input;
  }
}

function colorSquare() {
  let colorValue = document.querySelector(".switchColorValue").value;
  this.style.backgroundColor = colorValue;
}
function fillSquareColour() {
  let sketchPadBox = document.querySelectorAll("main>div");
  sketchPadBox.forEach((box) => {
    box.addEventListener("mouseover", randomColor);
  })
}
function randomColor() {
  this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
function clearScreen() {
  let sketchPadBox = document.querySelectorAll("main>div");
  sketchPadBox.forEach(
    (child) => (child.style.backgroundColor = "hsla(0, 0%, 97%, 0.1)")
  );
}