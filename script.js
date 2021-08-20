const sketch = document.getElementById("sketch");
let gridSize = 32;
setUpGrid();



const blackButton = document.getElementById('black');
const rainbowButton = document.getElementById('rainbow');
const clearButton = document.getElementById('clear');
const slider = document.querySelector('input');
blackButton.addEventListener('click', setColorBlack);
rainbowButton.addEventListener('click', setColorRainbow);
clearButton.addEventListener('click', clearSketch);
slider.addEventListener('change', updateGridDivisions);

sketch.addEventListener('mouseover', fillSquare);

function fillSquare(e) {
    currentOpacity = e.target.style.opacity;
    if (currentOpacity === '') {
        e.target.style.opacity = '0.2';
    }
    else e.target.style.opacity = `${+currentOpacity + 0.2}`;
}

function setUpGrid() {
    sketch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    createGridSquares();
}
function createGridSquares() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = '100%';
        square.style.height = '100%';
        sketch.appendChild(square);
    }
}
function setColorBlack() {
    const squares = sketch.childNodes;
    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(72, 15, 119)';
    });
}
function setColorRainbow() {
    const squares = sketch.childNodes;
    squares.forEach(square => {
        const hue = (Math.random() * 360).toFixed(2);
        square.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
}
function clearSketch() {
    const squares = sketch.childNodes;
    squares.forEach(square => {
        square.style.opacity = '0';
    });
}
function updateGridDivisions(e) {
    gridSize = e.target.valueAsNumber;
    sketch.childNodes.forEach(square => square.remove());
    setUpGrid();

}