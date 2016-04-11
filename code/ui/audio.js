(function(){
    var audioplayer = document.getElementById("audioPlayer");
    InitWebPlayer(audioplayer);
});

var supportedFormats = [{type = "video", fileType = "ogg", codecs = "theora, vorbis"},
                        {type = "video", fileType = "mp4", codecs = "avc1.4D401E, mp4a40.2"},
                        {type = "video", fileType = "webm", codecs = ""},
                        {type = "audio", fileType = "ogg", codecs = "vorbis"},
                        {type = "audio", fileType = "mp4", codecs = "mp4a.40.5"}];

function InitWebPlayer (webplayer){
    if (IsNotNull(webplayer)){
        webplayer.play = function (){
            LoadingAnimation.startAnimation();   
        }
        
        webplayer.pause = function (e){
            LoadingAnimation.stopAnimation();            
        }
        
        webplayer.ended = function (){
            LoadingAnimation.stopAnimation();             
        }
        
        webplayer.error = function (e){
            console.error(e);
        }
    }
}
