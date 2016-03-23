var httpRequest = {
    GetRSS : (function(url, result){
        var feed = new google.feeds.Feed(url);
        feed.load(function (data) {
            console.dir(data);
        });
    }),
    GetCors: (function (url) {
        //'application/rss+xml'
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'application/rss+xml', 
            cache: true,
            async : false,
            crossDomain: true,
            beforeSend : function(xhr){
                xhr.withCredentials = true;
            },
            success : function (e){
                console.log(e);
            },
            error: function (e) {
                console.log(e);
            },
            fail: function () {
                console.error("Could not get data from '" + url + "'");
            }
        });
    })
};



