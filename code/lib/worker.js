var worker = {
    task = null,
    file = null,
    start : function (){
        if(typeof(file) !== undefined){
            if(IsNotNull(taskFile)){
                task = new Worker(file);
                task.postMessage();
            }
            else {
                console.error("Web Worker Error: No worker could be created. Supply a valid file path.");
            }
        } else {
            alert("Unsupported Browser Version! Current browser does not support webworkers!");
        }
    },
    stop : function (){
        if(IsNotNull(task)){
            task.terminate();
            task = null;
        }
    }
}