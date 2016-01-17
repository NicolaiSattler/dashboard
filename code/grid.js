var currentCellIndex;
var newCellIndex;
var grid = document.getElementsByClassName("grid");
var cells = document.getElementsByClassName("cell");


function SetGridToDraggable() {
    for (var i = 0; i < cells.length; i++) {
        var obj = cells[i];
        obj.onclick = cellOnClick;
    }
}

function cellOnClick(e) {
    currentCellIndex = $(this).index();
    console.log("Cell " + currentCellIndex + " has been clicked.");
}




