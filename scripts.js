
var channels=["freecodecamp","EternaLEnVyy","Arteezy","ohhhmyyy","RaineAndShine","DotACapitalist",
"drsushi11","petey_did_it","Slaye","KeyboardHead_","Tiberoa","DOTAgasm","MotPax","koreyah","dota2ti","ZyoriTV",
"FLUFFDota","fwoshy","eloise_ailv","ByeondTheSummit"]

function getChannelData(){
  channels.forEach(function(item){
    function makeURL(type, name) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?callback=?';
    };
    $.getJSON(makeURL("streams",item),function(data){
      var game, status;
      if(data.stream==null){
        game="Offline";
        status="Offline";
      }
      else if(data.stream==undefined){
        game="Account Closed";
        status="Offline";
      }
      else{
        game=data.stream.game;
        status="Online"
      }
      $.getJSON(makeURL("channels",item),function(data){
        var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
        var name=data.display_name;
        
      })
    });
  })
}

$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    console.log(data);
  });

});
