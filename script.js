const sketch = document.getElementById("sketch");

let gridSize = 32;
sketch.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`;
// sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
for (let i = 0; i < gridSize*gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = '100%';
    square.style.height = '100%';
    sketch.appendChild(square);
}

sketch.addEventListener('mouseover', colorPixel);

function colorPixel(e){

    e.target.style.backgroundColor = 'black';
}