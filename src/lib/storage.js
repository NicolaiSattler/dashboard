//30 Cookies for each domain due to Opera 

function SetCookie(name, value, daycount) {
    var d = new Date();
    d.setDate(d.getTime + (daycount * 24 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var cookie = cname + "=" + value + ";" + expires;
    
    //Limit of 4096 charicters;
    if (cookie.length < 4095) {
        document.cookie = cookie;
        return true;
    }
    else return false;
}

function GetCookie(name) {
    var cookieName = name + ";";
    var cookieCollection = document.cookie.split(';');
    for (var i = 0; i < cookieCollection.length; i++){
        var cookie = cookieCollection[i];   
        while(cookie.charAt(0) == ' '){
            cookie = c.substring(1);
        }     
        if(cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length);
        }
    }   
    return "";
}

function SetLocalStor(name, value){
    if (_hasStorageSupport){
        
        if (IsObject(value)){
            value = JSON.stringify(value);
        }
        localStorage.setItem(name, value);
    } else {
        console.error("Error: Unsupported browser feature! Could not add variable to Local Storage.")
    } 
}

function GetLocalStor(name){
    var result = localStorage.getItem(name);
    if(IsNotNull(result)){      
        try {
            return JSON.parse(result);
        } catch (e) {
            return result;
        }
    }
}

function RemoveLocalStor(name){
    localStorage.removeItem(name);
}

function SetSessionStor(name, value){
    if (_hasStorageSupport){      
        if (IsObject(value)){
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(name, value);
    } else {
        console.error("Error: Unsupported browser feature! Could not add variable to Session Storage.")
    } 
}

function GetSessionStor(name){
    var result = sessionStorage.getItem(name);
    if (IsNotNull(result)) {      
        try {
            return JSON.parse(result);
        } catch (e) {
            return result;
        }
    }
}

function RemoveSessionStor(name){
    sessionStorage.removeItem(name);
}


function _hasStorageSupport(){
    if (typeof (Storage) !== undefined) return true;
    return false;
}

