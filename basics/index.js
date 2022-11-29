// Import export
// const app = require("./app")
// console.log(app.z());

// let x = "90";
// if(x == 90){
// console.log('matched');
// }else{
//     console.log('not matched');
// }

// for(i=0;i<10;i++){
// console.log(i);
// }

// var a = [0,1,2,3,4,5,6,7]
// let filterData = a.filter((ele)=>{
//     return ele > 4
// })
// console.log(filterData);

// Core Module -> 1. global-> fs,http 2. non-Global(does't need to export)-> __dirname, __filename
const fs = require("fs");
const http = require('http');

// fs
// fs.writeFileSync("hello.txt","This is demo of Fs module.");

// http server
http.createServer((req,resp)=>{
    resp.write("<h1> Hello from server.</h1>");
    resp.end();
}).listen(4500);


//  __dirname
// console.log("->>>",__dirname);

// filename
// console.log("->>>",__filename);
