
var fs =require('fs');

// i use fs module to create file "welcome.txt"containing one line "hello node"
 fs.writeFile('welcome.txt','Hello Node',function (err){
      
    if (err) throw err;
    console.log('saved!');
 });
 fs.readFile('welcome.txt','utf-8',function(err,data){
    if (err) throw err;
    console.log('data from welcome.txt',data);
 });