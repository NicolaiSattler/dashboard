window.onload = (function () {  
    importJavaScript('src/lib/utils.js');
    importJavaScript('src/lib/calc.js');
    importJavaScript('src/lib/http.js');
    importJavaScript('src/lib/tasker.js');

    importJavaScript('src/ui/grid.js');
    importJavaScript('src/ui/clock.js');
    importJavaScript('src/ui/task.js');
    importJavaScript('src/ui/tab.js');
    importJavaScript('src/ui/loadAnimation.js');
    importJavaScript('src/ui/audio.js');
});

var importJavaScript = function(fileURL){
    var head = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = fileURL;
    head.appendChild(script);  
};

var importStylesheet = function(fileURL){
    var head = document.getElementsByTagName('head')[0];
    var stylesheet = document.createElement('link');
    stylesheet.type = 'text/css';
    stylesheet.href = fileURL;
    head.appendChild(script);
}