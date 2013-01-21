var request = require('request');
var _ = require('underscore');
var cfg = require('./config.js')


var requester = function(){
_.each(cfg.links,function(link){
request(link, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Print the google web page.
  } 
  console.log(response.statusCode)
})})
}

setInterval(requester,cfg.interval*1000)

