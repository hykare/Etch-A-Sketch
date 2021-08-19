const sketch = document.getElementById("sketch");

let gridSize = 16;
sketch.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`;
sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
for (let i = 0; i < gridSize*16; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = '100%';
    square.style.height = '100%';
    sketch.appendChild(square);
}