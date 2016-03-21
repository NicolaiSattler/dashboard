//Typical use of the singleton pattern might include
//1. Database Driver Manager
//2. Screen manager --> layout of windows.
//3. Mathematical classes

//There are several global singlton objects like:

//Mathematical
var Calculator = {
    Circumference = function(radius){
        if(IsANumber(radius) && radius > 0){
            var circumference = 2 * Math.PI * radius;
            return circumference;
        }
        return null;
    },  
    SurfaceArea = function(radius){
        if(IsANumber(radius) && radius > 0){
            //Quadraat
            var area = Math.PI * Math.pow(radius, 2);
            return area;
        }
        return null;
    }
}

//JSON
var Converter = {
    ObjectToJSON = function(obj) {
        if(IsNotNull(obj)){
            var jsonObj = JSON.stringify(obj);
            return jsonObj;
        }
    },
    JSONToObject = function(json){
        if(IsNotNull(obj)){
            var parsedObj = JSON.parse(json);
            return parsedObj;
        }
        return null;
    }
}


