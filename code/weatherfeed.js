//check if namespace is already defined in this or another file.
//If yes use other file, otherwise create a new namespace.
var Dashboard = Dashboard || {};

//Create a sub-namespace.
Dashboard.WeatherFeed = {};


window.onload = function()
{
    populateSelect();
    retrieveDataFromRSS()
}

var HTTPLib = JSLibrary.HTTP.HTTPRequest;
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
    
    var httpCORS = HTTPLib.createCORSRequest("GET", url);  
    httpCORS.onreadystatechange = function () {
        if (httpCORS.readyState == 4 && httpCORS.status == 200) {
            var responseHeader = httpCORS.getAllResponseHeaders();
        }
    };

    httpCORS.open("GET", url, true);
    httpCORS.send();
}