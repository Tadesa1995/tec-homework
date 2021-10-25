// import
// const express =require('express');
// const app =express();
// const port=3000;

// // static files (its not gonna be work until u wil use the send method)
// app.use(express.static(__dirname + 'html/index'))
// app.use(express.static(__dirname + 'html/about'))
// app.use(express.static(__dirname + 'css/style'))
// //  


// // to get the files 

// app.get('',(req, res) => {
//     res.send('mogagag')

// })
// import
const express =require('express');
const app =express();
const port=3000;
// tacher way
// const publicpath=path.join(__dirname,'public','img/meeow.jpg')
// app.use(express.static(publicpath))
// app.listen(port,()=>console.info('listening on port 3000'));


// static files 
app.use(express.static('public'))
app.use('css',express.static(__dirname + 'public'))
app.use( 'js',express.static(__dirname + 'public'))
app.use('img',express.static(__dirname + 'public'))

const publicpath=path.join(__dirname, 'public/')
app.use(express.static(publicpath))
// app.get('',(req, res)=>{
//     res.sendFile(__dirname + 'html/index.html')
// })

//  to change it from html  to the  ejs


// app.set('html','./html')
// app.set('view engine','ejs')

// // // to get the files (pictures)
// app.get('',(req, res) => {
//     res.render('index')

// })
 app.listen(port,()=>console.info('listening on port 3000'));







// listen to port 3000







// listen to port 3000
app.listen(port,()=>console.info('listening on port 3000')); 