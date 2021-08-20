const sketch = document.getElementById("sketch");
let gridSize = 32;

setUpGrid();



sketch.addEventListener('mouseover', fillSquare);

function fillSquare(e){
    currentOpacity = e.target.style.opacity;
    if(currentOpacity===''){
        e.target.style.opacity = '0.2';
    }
    else e.target.style.opacity = `${+currentOpacity+0.2}`;
}

function setUpGrid(){
    sketch.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`;
    createGridSquares();
}
function createGridSquares(){
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = '100%';
        square.style.height = '100%';
        sketch.appendChild(square);
    }
}
