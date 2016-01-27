var _selectedCellIndex;
var _selectedCellId;
var _affectedCellId;
var _event = false;

function SetGridToDraggable() {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        var obj = cells[i];
        obj.addEventListener("mousedown", GetCellAttributes);
        obj.addEventListener("mousedown", CreatePlaceHolder);
        obj.addEventListener("mouseover", ValidateElement);
    }
      
    document.addEventListener("mouseup", RemovePlaceHolder);
    document.addEventListener("mouseup", FinalizeCellRepositioning);
    document.addEventListener("mousemove", SetPlaceholderPosition);
}

function GetCellAttributes(e) {
    _selectedCellIndex = $(this).index();
    _selectedCellId = $(this).attr('id');
    _event = true;
}

function ValidateElement(e) {
    if (!_event) return;
    _affectedCellId = $(this).attr('id');
}

function FinalizeCellRepositioning(e) {
    var affectedCell = document.getElementById(_affectedCellId);
    var selectedCell = document.getElementById(_selectedCellId);
    
    if(affectedCell == undefined || selectedCell == undefined) return;
    
    selectedCell.style.position = "";
    selectedCell.style.left = "";
    selectedCell.style.left = "";
    affectedCell.parentNode.insertBefore(selectedCell, affectedCell);
    _event = false;
}

function CreatePlaceHolder(){
    var tag = document.createElement('p');
    tag.innerHTML = _selectedCellId;
    
    var placeholder = document.createElement('div');
    placeholder.id = "placeholder";
    placeholder.className = "cell";
    placeholder.style.border = "5px solid red";
    placeholder.appendChild(tag);
    
    document.getElementById("grid").appendChild(placeholder);
}

function RemovePlaceHolder(){
    var placeholder = document.getElementById("placeholder");  
    if(placeholder != undefined){
        document.getElementById("grid").removeChild(placeholder);
    }
}

function SetPlaceholderPosition(e) {
    if (!_event) return;

    var x = e.pageX;
    var y = e.pageY;
    var cell = document.getElementById("placeholder");
    
    if(cell != undefined){
        cell.style.position = "absolute";
        cell.style.opacity = "0.5";
        cell.style.left = x + "px";
        cell.style.top = y + "px";
    }
}

//add to library..
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}


