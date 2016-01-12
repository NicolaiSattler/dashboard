//namespace
var JSLibrary = JSLibrary || {};
//sub-namespace
JSLibrary.HTTP = 
{   
    //class
    HTTPRequest : function ()
    {
        //property
        this.xhr = new XMLHttpRequest();
        
        //methods: create a Cross-Origin Resource Sharing Request.        
        function CreateCORSRequest (method, url)
        {
            if("withCredentials" in this.xhr)
            {
                this.xhr.open(method, url, true);
            }
            else if (typeof XDomainRequest != "undefined")
            {
                //Excists only in IE: 
                this.xhr = new XDomainRequest();
            }
            else 
            {
                //CORS is not supported
                this.xhr = null;
            }
        };
    }
};


