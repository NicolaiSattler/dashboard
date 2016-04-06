window.onload = (function () {  
    importJavaScript('code/lib/aSquirl.js');
    importJavaScript('code/lib/calc.js');
    importJavaScript('code/lib/http.js');
    importJavaScript('code/lib/tasker.js');

    importJavaScript('code/ui/grid.js');
    importJavaScript('code/ui/clock.js');
    importJavaScript('code/ui/task.js');
    importJavaScript('code/ui/tab.js');    
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