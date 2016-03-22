var httpRequest = {
    //https://msdn.microsoft.com/en-us/library/dd573303(v=vs.85).aspx
    GetCORS: (function (url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'application/xml',
            cache : true,
            crossDomain : true,
            onreadystatechange: function(e){
                console.log(e.status);
            },
            success: function(result){
                console.log(result);
                console.log("success!");
                return result;
            },
            error: function (e){
              console.log(e);  
            },
            fail: function(){
                console.error("Could not get data from '" + url +"'");
            }
        });
    }),
    GetRSSFeedTest: (function(url){
        $.get(url, function(data) {
        var $xml = $(data);
        // $xml.find("item").each(function() {
        //     var $this = $(this),
        //         item = {
        //             title: $this.find("title").text(),
        //             link: $this.find("link").text(),
        //             description: $this.find("description").text(),
        //             pubDate: $this.find("pubDate").text(),
        //             author: $this.find("author").text()
        //     }
        
        return $xml;
        //     //Do something with item here...
        });
    }),
    GetRSSFeed: function (url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'application/xml',
            cache : true,
            crossDomain : true,
            onreadystatechange: function(e){
                console.log(e.status);
            },
            success: function(result){
                return result;
            },
            error: function (e){
              console.log(e);  
            },
            fail: function(e){
                console.error("Could not get data from '" + url +"' " + e);
            }
        });
    }
};



