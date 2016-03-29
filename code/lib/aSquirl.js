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

function HasClass(elem, className){
    if (IsNotNull(elem)){
        //start with a space, or the start(^) of a string + classname + space or end($) of string
        //return elem.className.match(new RegExp('\s|^' + className + '\s|$')) != "";
        return elem.className.indexOf(className) != -1;    
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