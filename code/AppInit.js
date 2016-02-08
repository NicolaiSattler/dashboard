window.onload = function () {
    SetGridToDraggable();
    ClockApp();
    
    window.setInterval(updateTime, 1000);
}
