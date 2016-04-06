var tabbedCells = $('.tabbed');
var tabs = new Array();
var switches = new Array();

(function (){
    for(var i = 0; i < tabbedCells.length; i++){
        var cell = tabbedCells[i];       
        for(var j = 0; j < cell.childNodes.length; j++){
            var child = cell.childNodes[j];
            if (HasClass(child, 'tabswitch')){
                switches.push(child);
            } else if(HasClass(child, 'tab')){
                tabs.push(child);
            } 
        }
        
        for(var j = 0; j < switches.length; j++){
            switches[j].addEventListener("mousedown", TabSwitch);            
            if(!switches[j].checked){
                var index = switches[j].value;
                AddClass(tabs[index], 'hidden');
            }
        }
    }
})();

function TabSwitch(e){
    var event = event || window.event;
    if(event.stopPropagation){
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
    
    //TODO: wanneer meerdere grid cellen 'tabbed' zijn, werkt dit niet meer.
    var index = $(this).attr('value');
    tabs.forEach(t => AddClass(t, 'hidden'));
    RemoveClass(tabs[index], 'hidden');
}