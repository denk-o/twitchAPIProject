
var channels=["freecodecamp","EternaLEnVyy","Arteezy","ohhhmyyy","RaineAndShine","DotACapitalist",
"drsushi11","petey_did_it","Slaye","KeyboardHead_","Tiberoa","DOTAgasm","MotPax","koreyah","dota2ti","ZyoriTV",
"FLUFFDota","fwoshy","eloise_ailv","BeyondTheSummit","brunofin"]

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
        var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
        var name = data.display_name!= null ? data.display_name : item;
        var html = "<div class='row "+status+"'><div class='col-xs-2 col-sm-1' id='icon'>"+
        "<img src='"+logo+"' class='logo'></div><div class='col-xs-10 col-sm-3' id='name'><a href='"+
        data.url+"' target='_blank'>"+name+"</a></div><div class='col-xs-10 col-sm-8' id='streaming'>"+
        game+"</div></div>";
        status === "Online" ? $("#stream_container").prepend(html) : $("#stream_container").append(html);
      })
    });
  })
}

$(document).ready(function(){
  getChannelData();

});
