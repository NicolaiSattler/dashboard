window.dome = (function () {
    //constructor
    function Squirl (obj){
        for (var i = 0; i < obj.length; i++){
            this[i] = obj[i];
        }
        this.length = obj.length;
    }
        
    var squirl = {
        get : function (selector){
            var obj;
            if(typeof selector === "string"){
                obj = document.querySelectorAll(selector);
            }
            else if (selector.length){
                obj = selector;         //is an array
            }
            else obj = [selector];      //create an array         
            return new Squirl(obj);
        },
        
        // create : function (tagName, attributes){
        //     var el = new Squirl([document.createElement(tagName)]);
        //     if(attributes){
        //         if(attributes.className){
        //             el.addClass(attributes.className);
        //             delete attributes.className;
        //         }
        //     }
        // }
        // 
    };
    
    squirl.prototype.map = function(callback){
        var results = [];
        
        for(var i = 0; i < this.length; i++){
            results.push(callback.call(this, this[i], i));
        }   
        return results;
    };
    
    squirl.prototype.mapOne = function (callback) {
        var m = this.map(callback)
        return m.length > 1 ? m : m[0];
    }
    
    squirl.prototype.text = function(text){
      if(typeof text !== "undefined"){
          return this.forEach(function (el){
              el.innerText = text;
          });
      }
      else {
          return this.mapOne(function (el){
              return el.innerText;
          });
      }
    };
    
    squirl.prototype.html = function(html){
        if(typeof html !== "undefined"){
            return this.forEach(function (el){
                el.innerHTML = html;
            });
            return this;
        }
        else{
            return this.mapOne(function (el){
               return el.innerHTML;
            });
        }
    }
    
    squirl.prototype.addClass = function (classes) {
        var className = "";
        if(typeof classes !== "string"){
            for (var i = 0; i < classes.length; i++){
                className += " " + classes[i];
            }
        }
        else{
            className = " " + classes;
        }
        return this.forEach(function (el) {
           el.className += className; 
        });
    }
    
    //Remove Class
    squirl.prototype.removeClass = function(c){
        return this.forEach(function (el){
           var cs = el.className.split(" ") 
           var i = 0;
           
           while ((i = cs.indexOf(c)) > -1){
               cs = cs.slice(0, i).concat(cs.slice(++i)); //joining 2 arrays togetter
           }
           el.className = cs.join(" ");
        });
    }
    
    //indexOf bugfix for IE8
    if(typeof Array.prototype.indexOf !== "function"){
        Array.prototype.indexOf = function (item){
            for(var i = 0; i < this.length; i++){
                if(this[i] === item){
                    return i;
                }
            }
            return -1;
        }
    }
    
    squirl.prototype.attr = function (attr, val){
        if(typeof val !== "undefined"){
            return this.forEach(function(el){
                el.setAttribute(attr, val);
            });
        }
        else{
            return this.mapOne(function (el) {
               return el.getAttribute(attr); 
            });
        }
    }
    
    
    
    
    return squirl;
})
