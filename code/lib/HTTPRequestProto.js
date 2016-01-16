var HTTPRequestPrototype = {
    CORSRequest: function (method, url) {
        var xhr = new XMLHttpRequest();
        var url = url;
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4 && xhr.status == 200) {
                return xhr.responseBody;
            }
        }
        xhr.onabort = function (e) {
            console.log("Request aborted:" + url);
            console.log(e.returnValue);
        }
        xhr.ontimeout = function (e) {
            console.log("Request timeout:" + url);
            console.log(e.returnValue);
        }
        xhr.onerror = function (e) {
            console.log("An error has occured:" + url);
            console.log(e.returnValue);
        }

        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
            xhr.send(null);
        }
        else if (typeof XDomainRequest != "undefined") {
            //Excists only in IE: 
            xhr = new XDomainRequest();
        }
        else {
            //CORS is not supported
            xhr = null;
        }
    },

    GetRSSFeed: function (url) {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else {
            alert("Your browser does not support AJAX.");
        }

        xhr.open("GET", url, true);

        //request for fresh (non-cached_ data.
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Pragma", "no-cache");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText != null) {
                    return xhr.responseXML;
                }
                else {
                    console.log("Could not load RSS:" + url);
                    return false;
                }
            }
            else {
                console.log("Error:" + xhr.status + " Received:" + xhr.statusText);
            }
        }
        xhr.send(null);
    }
}



