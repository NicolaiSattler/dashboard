//In JS, a namespace is a global variable with variables and function attached to it.

var MyNamespace = {
    myFunction1 : function(param){
        return true;
    },
    myFunction2 : function(param){
        return false;
    },
    message : "Hello World",
    countr : 42
}

//outside of the namespace..
MyNamespace.myFunction1(null);
MyNamespace.message = "Goodbye all";