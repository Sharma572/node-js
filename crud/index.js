// CRUD 

// Create
const fs = require('fs');

// Path - it will helps to crete file in peticular directary
const path = require('path');
//                                 This if folder name
const dirName = path.join( __dirname,  'crud'    )
const filepath = `${dirName}/create.txt`;

fs.writeFileSync(filepath,"This is file of create");


// Read 
// Note - if we are not passing char-code than buffer will be consoled
// fs.readFile(filepath,"utf8",(err,item)=>{ 
//     console.log(item);
// })

// Update 
// fs.appendFile(filepath," and we perform update task",(err)=>{
//     if(!err) console.log("file has been updated");
// })


// Delete
// fs.unlinkSync(`${dirName}/text.txt`);




// Rename
// fs.rename(filepath,`${dirName}/text.txt`,(err)=>{
//     if(!err) console.log('file renamed ');
// })
