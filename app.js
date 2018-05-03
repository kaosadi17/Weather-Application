var http = require('http');
var url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

var server = http.createServer(function(request,response){
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'City Name : ' + data['name'] + '</br>' + "</h1>");
        response.write("<h2>" + 'Temperature : ' + data.main['temp'] + '</br>' + "</h2>");
        response.write("<h2>" + 'SunSet Time : ' + new Date(data.sys['sunset']*1000) + '</br>' + "</h2>");
        response.write("</div></body></html>");
        response.end();
	//added changes to this feature branch
    });

    
}).listen('8080');
