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