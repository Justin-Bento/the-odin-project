const colorPicker = '';
const defaultColor = 'black';
const defaultSize = 16;

// DOM elements
const app = document.createElement('header');
const headline = document.createElement('h1');
const supporting = document.createElement('p');
const message = document.createElement('p');
const surface = document.createElement('main');
const actionsContainer = document.createElement('div');
const switchColorButton = document.createElement('input');
const rainbowModeButton = document.createElement('button');
const clearScreenButton = document.createElement('button');
const customSurfaceButton = document.createElement('button');

// Set text content
headline.textContent = 'Project: Etch A Sketch';
supporting.textContent = 'Build a browser version of an Etch-A-Sketch where you can draw with your mouse, change colors, and erase the drawing when you\'re done';
rainbowModeButton.textContent = 'Rainbow';
clearScreenButton.textContent = 'Clear';
customSurfaceButton.textContent = 'Grid';

// Set attributes
switchColorButton.setAttribute('type', 'color');

// Add classes
actionsContainer.classList.add('actions');
rainbowModeButton.classList.add('rainbowModeButton');
switchColorButton.classList.add('switchColorValue');
clearScreenButton.classList.add('clearScreenButton');
customSurfaceButton.classList.add('customSurfaceButton');
message.classList.add('message');

// Append elements to the DOM
document.body.appendChild(app);
app.appendChild(headline);
app.appendChild(supporting);
app.appendChild(message);
document.body.appendChild(surface);
document.body.appendChild(actionsContainer);
actionsContainer.appendChild(switchColorButton);
actionsContainer.appendChild(rainbowModeButton);
actionsContainer.appendChild(clearScreenButton);
actionsContainer.appendChild(customSurfaceButton);

// Event Listeners
rainbowModeButton.addEventListener('click', fillSquareColour);
clearScreenButton.addEventListener('click', clearScreen);
customSurfaceButton.addEventListener('click', () => {
  const size = getSize();
  createBoard(size);
});

// Code and logic
createBoard(defaultSize);

function createBoard(size) {
  const board = document.querySelector('main');
  board.style.display = 'grid';
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  const numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', colorSquare);
    board.appendChild(div);
  }
}

function getSize() {
  const input = window.prompt('Select a new size for the sketchpad');
  if (input === "") {
    message.textContent = 'Provide a number';
  } else if (input < 0 || input > 100) {
    message.textContent = 'Provide a number between 1 and 100';
    return getSize(input);
  } else {
    message.textContent = 'Have fun :)';
    return input;
  }
}

function colorSquare() {
  const colorValue = document.querySelector('.switchColorValue').value;
  this.style.backgroundColor = colorValue;
}

function fillSquareColour() {
  const sketchPadBox = document.querySelectorAll('main>div');
  sketchPadBox.forEach((box) => {
    box.addEventListener('mouseover', randomColor);
  });
}

function randomColor() {
  this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function clearScreen() {
  const sketchPadBox = document.querySelectorAll('main>div');
  sketchPadBox.forEach(
    (child) => (child.style.backgroundColor = 'hsla(0, 0%, 97%, 0.1)')
  );
}
