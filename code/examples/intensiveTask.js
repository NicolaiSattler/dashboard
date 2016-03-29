self.onmessage = function(e){
    //wait to receive the call to start the webworker.
    if(typeof(e.data) != undefined && e.data === 'start'){      
        intensiveTask(); 
    }
}

function intensiveTask(){
    postMessage("Webworker started!");
    var percentage = 0;
    var iterations = 10000000;

    for(var i = 0; i < iterations; i++){
        var bla = Math.random * Math.round * Math.random / Math.PI; 
        var iPerc = i / iterations * 100;
        if(iPerc > 1 && Math.floor(iPerc) > percentage){
            percentage++;
            postMessage("percentage:" + percentage);
        }
    };
    postMessage("Webworker completed job");
}