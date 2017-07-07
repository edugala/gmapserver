var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send({"msg": "Root Request Received"})
})
app.listen(3000, function(){
	console.log("Server now listening to port 3000")
})