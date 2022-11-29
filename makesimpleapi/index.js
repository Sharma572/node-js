// step-1
const http = require('http');
const data = require('./data')
// step-2
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data))
res.end();
}).listen(5500)