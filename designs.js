// Select color input
// Select size input

const table = document.createElement("table");
const tableInfo = document.getElementsByTagName("td");
const checkColor = "";

// Cells colored when picked
function colorFill (event) {
    const color = document.getElementById("colorPick").value;
    event.target.bgColor = color;
}

// When size is submitted by the user, call makeGrid()

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
    event.preventDefault();
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
    if (tableInfo.length == (inputHeight.value*inputWidth.value)) {
        reset();
    }
    else {
        let height = document.getElementById("inputHeight").value;
        let width = document.getElementById("inputWidth").value;
        makeGrid(height, width);
    }
})