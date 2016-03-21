function someFunction(){
    //Declare a local variable
    var errorCode = 100;
    
    //implicitly (stilzwijgend) declare a global variable
    countr = 0;
}

function someStrictFunction(){
    "use strict";
    
    //When you use strict mode, you will get an error if you decalre a variable,
    // without using the 'var' keyword.
}