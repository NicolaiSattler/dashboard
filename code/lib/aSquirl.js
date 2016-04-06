function IsNotNull(obj){
    if(obj != null && typeof obj !== undefined){
        return true;
    }
    return false;
}

function IsANumber(obj){
    if(IsNotNull(obj) && !isNaN(obj)){
        return true;
    }
    return false;
}

function IsObject(val){
    return val instanceof Object;
}

function HasClass(elem, className){
    if (IsNotNull(elem) && elem.nodeType == 1){
        var result = elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        return result != null;
    }
}

function AddClass(elem, className){
    if(IsNotNull(elem)){
        if (elem.classList){
            elem.classList.add(className);
        }  
        //support for older browsers
        // if(elem.className && element.className.length > 0){
        //     elem.className = elem.className.concat(' ' + className);
        // } else {
        //     element.className = className;
        // }
    }
}

function RemoveClass(elem, className){
    if(IsNotNull(elem)){
        if (elem.classList){
            elem.classList.remove(className);
        }
    }
}

function ChildIndex(e){
    var i = 0;
    while((e = e.previousSibling) != null){
        i++;       
    }
    return i;
}