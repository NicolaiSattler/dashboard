function someFunction(){
    //Declare a local variable
    var errorCode = 100;
    
    //implicitly declare a global variable
    countr = 0;
}

function someStrictFunction(){
    "use strict";
    
    //When you use strict mode, you will get an error if you declare a variable,
    // without using the 'var' keyword.
}