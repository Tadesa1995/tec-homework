const express = require('express');
 const path = require('path');
const app =express();
const port = 9000;
const server = express();
const publicpath=path.join(__dirname,'public')
app.use(express.static(publicpath))
app.listen(port,()=>console.info('listening on port 3000'));


// app.get('/',(req, res) =>{
// res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','index.html'));
// })
// app.get('/about',(req, res) =>{
//     res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','about.html'));
// })

// console.log(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','index.html'));