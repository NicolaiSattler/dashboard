function AnimateSVG(svg, frames, delay){
    var animated = false;
    var intervalId = null;
    
    this.onnextframe = null;
    this.elements = new Array(0);
    this.currentFrame = 1;
    
    for (var i = 0; i < svg.childNodes.length; i++){
        if (svg.childNodes[i].nodeType == 1){
            this.elements[i] = svg.childNodes[i];
        }
    }
    
    if (frames && frames > 0){
        this.frames = frames;
    } else {
        this.frames = 10;
    }
    
    if (delay && delay > 0){
        this.delay = delay;
    } else {
        this.delay = 100;
    }
    
    this.isAnimated = function(){
        return animated;
    }
    
    this.loadNextFrame = function(){
        this.currentFrame++;
        if (this.currentFrame > this.frames) this.currentFrame = 1;
        if (this.onnextframe) this.onnextframe();
    }
    
    this.startAnimation = function(){
        RemoveClass(this.svg, "hidden");
        this.svg.style.display = "block";
        animated = true;
        intervalId = setInterval(this.loadNextFrame.bind(this), this.delay);
    }
    
    this.stopAnimation = function(){
        AddClass(this.svg, "hidden");
        this.svg.style.display = none;
        animated = false;
        clearInterval(intervalId);  
    }
}

function AnimateFrame(){
    if (this.elements && this.elements.length > 0){
        for (var i = 0; i < this.elements.length; i++) {
            var radius = 80;
            var angle = (Math.PI / 5 * this.currentFrame) - (Math.PI / 5) * i;

            this.elements[i].setAttribute("cx", 30 + GetX(80, angle));
            this.elements[i].setAttribute("cy", 30 + GetY(80, angle));
        }
    }
}

function GetX(radius, angle) {
    //Horizontale uitwijking
    return Math.cos(angle) * radius;
}

function GetY(radius, angle) {
    //Verticale uitwijking
    return Math.sin(angle) * radius;
}

var _svg = document.getElementById("loadAnimation");
var LoadingAnimation = new AnimateSVG(_svg);
LoadingAnimation.onnextframe = AnimateFrame();