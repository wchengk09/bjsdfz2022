process.on('uncaughtException',function(err){console.log(err);})
var http=require("http");
var querystring = require("querystring");
http.createServer(function(req,res){
    var post="";
    req.on("data",function(chunk){
        post+=chunk;
    });
    req.on("end",function(){
        post=querystring.parse(post);
        if(post.mode=="user"){
            var user=require("user");
            user.main(post,res);
        }
    });
}).listen(18667);
console.log("Server is completed!");
