//immediate invoked function is a (anonymous) function that is defined and runs immediately!

(function () {
    //Variable defined inside the function disappear when the function is finished
    //they will not conflict with variables defined by other scripts
    var localVar = "Hello World";
    
    //The same logic applies to functions...
    function localFunc(){
        localVar = 99;
    }
    localFunc();
})();