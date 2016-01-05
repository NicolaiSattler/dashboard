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
