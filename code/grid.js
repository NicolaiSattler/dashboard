var SelectedCellIndex;
var SelectedCellId;
var _event = false;

var grid = document.getElementsByClassName("grid");
var cells = document.getElementsByClassName("cell");


function SetGridToDraggable() {
    for (var i = 0; i < cells.length; i++) {
        var obj = cells[i];
        obj.addEventListener("mousedown", GetCellAttributes);
        obj.addEventListener("mousemove", SetCellPositionAttributes);
        obj.addEventListener("mouseup", SetNewCellPosition)
    }
}

function GetCellAttributes(e) {
    SelectedCellIndex = $(this).index();
    SelectedCellId = $(this).attr('id');

    console.log("Cell:" + SelectedCellId);
    _event = true;
}

function SetCellPositionAttributes(e){
    if (!_event) return;

    var x = e.pageX;
    var y = e.pageY;
    var cell = document.getElementById(SelectedCellId);

    cell.style.position = "absolute";
    cell.style.left = x + "px";
    cell.style.top = y + "px";
}


function SetNewCellPosition (e) {
    var x = e.pageX;
    var y = e.pageY;
    var affectingCell = document.elementFromPoint(x,y);
    
    if(hasClass(affectingCell, "cell")){
        console.log("object has class!");
    }
    
    _event = false;
}

//add to library..
function hasClass(element, className){
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}


