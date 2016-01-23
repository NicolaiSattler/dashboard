var _selectedCellIndex;
var _selectedCellId;
var _affectedCellId;
var _event = false;
var _grid = document.getElementsByClassName("grid");
var _cells = document.getElementsByClassName("cell");

function SetGridToDraggable() {
    for (var i = 0; i < _cells.length; i++) {
        var obj = _cells[i];
        obj.addEventListener("mousedown", GetCellAttributes);
        obj.addEventListener("mousemove", SetCellPositionAttributes);
        obj.addEventListener("mouseover", ValidateElement);
        obj.addEventListener("mouseup", FinalizeCellRepositioning);
    }
}

function GetCellAttributes(e) {
    _selectedCellIndex = $(this).index();
    _selectedCellId = $(this).attr('id');
    _event = true;
}

function SetCellPositionAttributes(e){
    if (!_event) return;

    var x = e.pageX;
    var y = e.pageY;
    var cell = document.getElementById(_selectedCellId);

    cell.style.position = "absolute";
    cell.style.left = x + "px";
    cell.style.top = y + "px";
}

function ValidateElement(e){
    if(!_event) return;
    _affectedCellId = $(this).attr('id');
}

function FinalizeCellRepositioning (e) {
    //var affCell = $("#" + _affectedCellId).before(_selectedCellId);
    var affCell = $("#" + _affectedCellId).before(_selectedCellId);
    var selectedCell = document.getElementById(_selectedCellId);
    var affectedCell = document.getElementById(_affectedCellId);    
    var relativePosition = affectedCell.getBoundingClientRect();
    
    var affX = relativePosition.left;
    var affY = relativePosition.top;
    
    selectedCell.style.left = affX;
    selectedCell.style.top = affY;
    selectedCell.style.position = "";
    
    _event = false;
}

//add to library..
function hasClass(element, className){
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}


