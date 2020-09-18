var http = require('http');
var url = require('url');

var options = {
    host: '127.0.0.1',
    path: '/',
    port: '3000',
    method: 'POST'
};

function readJSONresp(response){
    var responseData = '';
    response.on('data', function (chunk) {
	responseData+=chunk;
    });

    response.on('end', function() {
	var dataOBJ = JSON.parse(responseData);
	console.log("Raw Response: " + responseData);
	console.log("Message: " + dataOBJ.message);
	console.log("Question: " + dataOBJ.question);
    });
}

var req = http.request(options, readJSONresp);
req.write('{"name":"Bilbo", "occupation":"Burglar"}');
req.end();
