var WorkerTask = function (file){
    this.id = "",
    this.taskFile = file;
    this.worker = new Worker(file);
    this.worker.onerror = function (e){
        console.error(e);  
    };
};

WorkerTask.prototype = {
    start : function () {
        if(IsNotNull(this.worker)){
            this.worker.postMessage("start");
        }      
    },
    stop : function (){
        if(IsNotNull(task)){
            worker.terminate();
            worker = null;
        }
    }
}