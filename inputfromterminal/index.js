const fs = require('fs');

const input = process.argv;

// fs.writeFileSync(input[2],input[3]);
                //   input[2]       input[3]         input[4]
// node ./index.js   add            data.txt       "THis is file of data"
if(input[2] == "add"){
  fs.writeFileSync(input[3],input[4])
}else if(input[2] == "remove"){
fs.unlinkSync(input[3])
}else{
    console.log('Invalid inout');
}
