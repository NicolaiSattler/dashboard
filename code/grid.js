var SelectedCellIndex;
var SelectedCellId;
var _event = false;

var grid = document.getElementsByClassName("grid");
var cells = document.getElementsByClassName("cell");


function SetGridToDraggable() {
    for (var i = 0; i < cells.length; i++) {
        var obj = cells[i];
        obj.addEventListener("mousedown", GetCellAttributes);
    }
}

function GetCellAttributes(e) {
    SelectedCellIndex = $(this).index();
    SelectedCellId = $(this).attr('id');

    console.log("Cell:" + SelectedCellId);
    _event = true;
}

document.onmousemove = function (e) {
    if (!_event) return;

    var x = e.pageX;
    var y = e.pageY;
    var cell = document.getElementById(SelectedCellId);

    cell.style.position = "absolute";
    cell.style.left = x + "px";
    cell.style.top = y + "px";
    cell.style.zIndex = cell.style.zIndex + 1;
}

document.onmouseup = function (e) {
    _event = false;
}


