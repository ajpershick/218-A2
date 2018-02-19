var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');

var server = http.createServer();
server.on('request', function(req,res){

  console.log('request:', req.url);
  var urlObj = url.parse(req.url, true); // true => query turned into an obj
  //console.log(urlObj);
  if (req.method === 'GET' && req.url === '/'){
    var filepath = path.join(__dirname, './form.html');

    fs.readFile(filepath, function(err, contents){
      if(err){
        res.writeHead(404);
        res.write('404 Error');
        res.end()
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(contents);
        res.end();
      }
    });
  } else if (req.method === 'GET' && req.url === '/data/users.json'){
    var filepath = path.join(__dirname, './data/users.json');

    fs.readFile(filepath, function(err, contents){
      if(err){
        res.writeHead(404);
        res.write('404 Error');
        res.end()
      } else {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(contents);
        res.end();
      }
    });
  } else if (req.method === 'GET' && req.url === '/script.js'){
    var filepath = path.join(__dirname, './script.js');

    fs.readFile(filepath, function(err, contents){
      if(err){
        res.writeHead(404);
        res.write('404 Error');
        res.end()
      } else {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.write(contents);
        res.end();
      }
    });
  }else if (req.method === 'GET' && req.url === '/style.css'){
    var filepath = path.join(__dirname, './style.css');

    fs.readFile(filepath, function(err, contents){
      if(err){
        res.writeHead(404);
        res.write('404 Error');
        res.end()
      } else {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(contents);
        res.end();
      }
    });
  } else if (req.method === 'POST' && req.url === '/'){
    var body ='';
    req.on('data', function(data){
      body += data.toString();
    });
    req.on('end', function(){
      var postObj = qs.parse(body);
      console.log(postObj);
      fs.writeFile("./data/users.json", JSON.stringify(postObj, null, 4));
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('404 Error');
    res.end()
  }
});
server.listen(8080);

console.log('Magic is happening on port 8080');
