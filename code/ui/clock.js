var canvas = document.getElementById('canvasClock');
var context = canvas.getContext("2d");
var bgLoaded = false;
var clockImage = new Image();
clockImage.src = 'img/clock.jpg';
// clockImage.onload = function(){
//     bgLoaded = true;
// }

(function () {
    // if(!bgLoaded){
    //     setTimeout('clockApp', 100);
    //     return;
    // }
    createClock();
    setInterval('createClock()', 1000);
    window.setInterval(updateTime, 1000);
})();

function createClock(){
    var time = new Date();
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    addBackgroundImage();
    drawHourPointer(time);
    drawMinutePointer(time);
    drawSecondPointer(time);
}

function addBackgroundImage(){
    //set background image.
    context.drawImage(clockImage, 0, 0, canvas.width, canvas.height);
}

function drawHourPointer(t){
    var degrees = (t.getMinutes() / 60 * 30) + (360 / 12 * t.getHours());
    var radiants = Calculator.Radians(degrees);
    context.save();
    context.fillStyle = 'black';
    context.translate(canvas.width / 2, canvas.height / 2);    
    context.rotate(radiants);
    clockPointer(70);
    context.restore();   
}

function drawMinutePointer(t){  
    var degrees = (t.getSeconds() * 6 / 60) + (t.getMinutes() * 6);
    var radiants = Calculator.Radians(degrees);
    context.save();
    context.fillStyle = 'black';
    context.translate(canvas.width / 2, canvas.height / 2);    
    context.rotate(radiants);
    clockPointer(90);
    context.restore();
}

function drawSecondPointer(t){
    var degrees = t.getSeconds() * 6;
    var radiants = Calculator.Radians(degrees);
    context.save()   
    context.fillStyle = 'red';   
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(radiants);
    clockPointer(80);
    context.restore();
}

function clockPointer(size){
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(-2, -10);
    context.lineTo(0, size * -1);
    context.lineTo(2, -10);
    context.lineTo(0, 0);
    context.fill();
}

function updateTime(){
    var currentTime = new Date();
    var currentHour  = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();  
    var hours = ( currentHour < 10 ? "0" : "" ) + currentHour.toString();
    var minutes = ( currentMinutes < 10 ? "0" : "") + currentMinutes.toString();
    var seconds = ( currentSeconds < 10 ? "0" : "") + currentSeconds.toString();    
    var digClock = document.getElementById("timestampDig");
    digClock.innerHTML = hours + ":" + minutes + "." + seconds;
}

//mijn japanse naam is:
//To-Ki-Mi-Mo-Ta-Ki