this._weatherURL = "http://www.xml.com/2006/09/13/examples/google-rss.xml";
this._httpRequest = Object.create(HTTPRequestPrototype);
this._cities = new Array
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

///https://developer.yahoo.com/weather/#get-started


window.onload = function()
{
    populateSelect();
    retrieveDataFromRSS();
}
  
function populateSelect(){
    var selectCity = document.getElementById('city');
    for(var i = 0; i < _cities.length; i++){
        var cityOption = new Option(_cities[i], _cities[i], false, false);
        cityOption.value, cityOption.label, cityOption.text = _cities[i];
        selectCity.appendChild(cityOption);
    }      
}
     
function retrieveDataFromRSS() {
    var result = _httpRequest.GetRSSFeed(_weatherURL);

    //corsRequest.onreadystatechange = function () {
    //    if (corsRequest.readyState == 4 && corsRequest.status == 200) {
    //        var responseHeader = corsRequest.getAllResponseHeaders();
    //    }
    //};

    //corsRequest.open("GET", url, true);
    
}