var httpRequest = {
    //https://msdn.microsoft.com/en-us/library/dd573303(v=vs.85).aspx
    GetCORS: (function (url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'xml',
            cache : false,
            async : true,
            onreadystatechange: function(e){
                console.log(e.status);
            },
            success: function(result){
                console.log("success!");
                return result;
            },
            fail: function(){
                console.error("Could not get data from '" + url +"'");
                return null;
            }
        });
    }),
    GetRSSFeed: function (url) {
        // if (window.ActiveXObject) {
        //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // else 
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else {
            alert("Your browser does not support AJAX.");
        }

        xhr.open("GET", url);
        //xhr.setRequestHeader("Cache-Control", "no-cache"); //request for fresh (non-cached_ data.
        //xhr.setRequestHeader("Pragma", "no-cache");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) { // && xhr.status == 200) {
                if (xhr.responseText != null) {
                    return xhr.responseText;
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
};



