var startTaskButton = document.getElementById('startWorker');
var container = document.getElementById('progressContainer');
var progress = document.getElementById('progressBar');
var file = "code/examples/intensiveTask.js";
var workerTask = new WorkerTask(file);
var inProgress = false;

if(IsNotNull(startTaskButton)){
    startTaskButton.onmousedown = function(e){
        if(!inProgress){
            var event = event || window.event;
            if(event.stopPropagation){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
            
            RemoveClass(container, "hidden");
            inProgress = true;
            workerTask.start();
        }
    };
}

workerTask.worker.onmessage = function(e){
    var msg = e.data;   
    if(IsNotNull(msg)){
        if(msg.indexOf('complete') != -1){
            if(!HasClass(container, "hidden")){
                AddClass(container, "hidden");
                setPercentage(0);
                inProgress = false;
            }
        }
        else {
            var result = msg.split(':');
            if (result.length > 0){
                setPercentage(result[1]);
            }
        }
    }
};

function setPercentage(perc){
    progress.style.width = perc + "%";
}
