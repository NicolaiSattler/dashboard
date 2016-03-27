for(var i; i < 1000000; i++){
    var perc = i / 100;
    if(perc % 1 != 0){
        self.postMessage("percentage:" + perc);
    }
};