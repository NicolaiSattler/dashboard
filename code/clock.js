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