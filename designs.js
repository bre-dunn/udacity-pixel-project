// Select color input
// Select size input

const table = document.createElement("table");
const tableInfo = document.getElementsByTagName("td");
const checkColor = "";
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// Cells colored when picked
function colorFill (event) {
    event.preventDefault();
    const color = document.getElementById("colorPick").value;
    event.target.bgColor = color;
}

/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/

function makeGrid(height, width) {
    table.innerHTML = "";
    for (let r = 0; r < height; r++) {
        var newRow = document.createElement("tr");
        for (let c = 0; c < width; c++) {
            var newCell = document.createElement("td");
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }
    pixelCanvas.appendChild(table);
    table.addEventListener('click', colorFill)
}

// Reset grid upon submit
function reset () {
    for (let b = 0; b < table.length; b++) {
        if (tableInfo[b].bgColor != checkColor) {
            table[b].bgColor = "";
        }
        event.preventDefault();
    }
}

// To create the grids
sizeInput.addEventListener('submit', function(event) {
    event.preventDefault();
    if (tableInfo.length == (inputHeight.value*inputWidth.value)) {
        reset();
    }
    else {
        let height = inputHeight.value;
        let width = inputWidth.value;
        makeGrid(height, width);
    }
})
