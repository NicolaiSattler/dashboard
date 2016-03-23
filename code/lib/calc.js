var Calculator = {
    Circumference : function(radius){
        if(IsANumber(radius) && radius > 0){
            var circumference = 2 * Math.PI * radius;
            return circumference;
        }
        return null;
    },  
    SurfaceArea : function(radius){
        if(IsANumber(radius) && radius > 0){
            var area = Math.PI * Math.pow(radius, 2);
            return area;
        }
        return null;
    },
    Radians : function(degrees){
        if(IsANumber(degrees) && degrees > 0){
            var rad = (Math.PI / 180) * degrees;
            return rad;
        }
        return null;
    }
};