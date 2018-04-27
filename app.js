var http = require('http');
var url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

var server = http.createServer(function(request,response){
    var request = require('request');
    request(url,function(err,res,body){
        console.log(body);
        response.write('hi');
        response.end();
    });

    
}).listen('8080');