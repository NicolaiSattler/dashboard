//namespace
var JSLibrary = JSLibrary || {};
//sub-namespace
JSLibrary.HTTP = 
{   
    //class
    HTTPRequest : function ()
    {
        //property
        
        //methods: create a Cross-Origin Resource Sharing Request.        
        function CreateCORSRequest (method, url)
        {
            var xhr = new XMLHttpRequest();
            
            if("withCredentials" in this.xhr)
            {
                xhr.open(method, url, true);
            }
            else if (typeof XDomainRequest != "undefined")
            {
                //Excists only in IE: 
                xhr = new XDomainRequest();
            }
            else 
            {
                //CORS is not supported
                xhr = null;
            }
            
            
            xhr.onabort = function(e)
            {
                console.log("Request aborted:" + url);
                console.log(e.returnValue);
            }         
            
            xhr.ontimeout = function(e)
            {
                console.log("Request timeout:" + url);
                console.log(e.returnValue);
            }
            
            xhr.onerror = function(e)
            {
                console.log("An error has occured:" + url);             
                console.log(e.returnValue);
            }         
        };
    }
};


