//Default object notation.
var employee = {};
employee.name = "John Smith";
employee.age = 28;
employee.salery = 10000;
employee.payRise = function(amount){
    //JavaScript does not support overloaded functions!
    //Inside a method, "this" means the current object (where it was invoked).
    this.salery += amount;
    return this.salery;
}

//An alternative notation for defining an object is the literal notation:
var objectName = {
    property1 : "value",
    property2 : "value"
};

//A constructor function
var Account = function (id, name){
    this.id = id;
    this.name = name;
    this.balance = 0;
    this.TransactionCount = 0;
};

//Methods should be set under prototype when creating an Object.
Account.prototype = {
    deposit = function(amount){
        this.balance += amount;
        this.TransactionCount++;
    },
    withdraw : function (amount) {
        this.balance -= amount;
        this.TransactionCount++;    
    },
    displayDetails : function() {
        alert(this.id + ', ' + name + ', ' + balance);
    }
}

var firstAccount = new Account(1, "John");
firstAccount.deposit(100);
firstAccount.displayDetails();
