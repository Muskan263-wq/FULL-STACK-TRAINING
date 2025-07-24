
const fs = require("fs");

//create a file
// fs.writeFileSync("./test.txt","Hey there..");                

 //read a file      as SYNC
// const result= fs.readFileSync("./contact.txt")      
// console.log(result);

//read a file ASYNC
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("ERROR")
//     }else{
//         console.log(result)
//     }
// })


//append file

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

//copy a file

// fs.cpSync("./test.txt","./copy.txt");
fs.copyFile("./test.txt","copy1.txt",(err)=>{
    if(err) throw error;
    console.log(copyfile);
})

//delete a file

// fs.unlinkSync("./copy.txt");

// fs.unlink("./contact.txt",(err)=>{
//     if(err) throw error;
//     console.log(unlink);
    
// })

