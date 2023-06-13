const mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
global.conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	database: 'zizhihui'
});
conn.on('error',err=>{
	console.log('Re-connecting lost connection: ');
	global.conn = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		database: 'zizhihui'
	})
});
process.on('uncaughtException',function(err){console.log(err);})

http.createServer(function(req,res){
	var url = '.' + req.url;
	if (url.indexOf('..') !== -1){
		res.writeHead(400);
		res.end('Invalid URL!');
		return;
	}
	var post = '';
    req.on('data',function(chunk){
        post += chunk;
    });

    req.on('end',function(){
		post = querystring.parse(post);
		var modu = require(url);
		modu.main(req,res,post);
	});
}).listen(17667);

console.log('Server started.');

