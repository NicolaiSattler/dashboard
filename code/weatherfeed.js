window.onload = function()
{
    populateSelect();
    retrieveDataFromRSS()
}

var lib = JSLibrary;
var RSSWeatherURL = "http://www.rssweather.com/wx/nl/leeuwarden/rss.php";
var Cities = new Array
    ("Amsterdam", 
    "De Bilt", 
    "De Kooy", 
    "Deelen", 
    "Eindhoven", 
    "Gilze-rijen", 
    "Groningen", 
    "Leeuwarden", 
    "Maastricht",
    "Rotterdam",
    "Soesterberg", 
    "Twenthe",
    "Valkenburg",
    "Vlieland",
    "Volkel",
    "Woensdrecht");


function populateSelect(){
    var selectCity = document.getElementById("city");
    for(var i = 0; i < Cities.length; i++){
        var cityOption = document.createElement('option');
        cityOption.value, cityOption.label, cityOption.text = Cities[i];
        selectCity.appendChild(cityOption);
    }      
}


function retrieveDataFromRSS(url) {
    
    var http = new lib.HTTPRequest();
    var corsRequest = http.createCORSRequest("GET", url);  
    corsRequest.onreadystatechange = function () {
        if (corsRequest.readyState == 4 && corsRequest.status == 200) {
            var responseHeader = corsRequest.getAllResponseHeaders();
        }
    };

    corsRequest.open("GET", url, true);
    corsRequest.send();
}