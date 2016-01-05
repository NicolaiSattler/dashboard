window.onload = function()
{
    populateSelect();
}


var cities = new Array
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
    for(var i = 0; i < cities.length; i++){
        var cityOption = document.createElement('option');
        cityOption.value, cityOption.label, cityOption.text = cities[i];
        selectCity.appendChild(cityOption);
    }      
}


function retrieveDataFromRSS(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var responseHeader = xmlhttp.getAllResponseHeaders();
        }
    };

    xmlhttp.onabort = function (e) {
        console.log("request was aborted... " + url);
    }

    xmlhttp.onerror = function (e) {
        console.log(e.error);
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}