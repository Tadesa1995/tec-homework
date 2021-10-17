const fs = require(`fs`)

fs.writeFile("english1.txt","u the best",(err)=>{
    if(err){
        throw err;
    }
    console.log("hey");
    fs.readFile("english1.txt",(err,data)=>{
        if(err){
            throw err
        }
        console.log(data);
              
    })

}) 
