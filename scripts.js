function getTwitchStreams(){
  //get the list of twitch streams and put them in divs
  var streamerLink;
  var streamerName;
  /*
    "<div class='row'><div class='col-md-12'><a href='twitchstreamhere'>streamer name
    </a></div></div>"
  */
}

$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    console.log(data);
  });

});
