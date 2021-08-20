const sketch = document.getElementById("sketch");
let gridSize = 32;
setUpGrid();



const blackButton = document.getElementById('black');
const rainbowButton = document.getElementById('rainbow');
const clearButton = document.getElementById('clear');
blackButton.addEventListener('click', setColorBlack);
rainbowButton.addEventListener('click', setColorRainbow);



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
        square.style.backgroundColor = 'black';
    });

}
function setColorRainbow() {
    const squares = sketch.childNodes;
    squares.forEach(square => {

        const hue = (Math.random()*360).toFixed(2);
        console.log(hue)
        square.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;


    });



}