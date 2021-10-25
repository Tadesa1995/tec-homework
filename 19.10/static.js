// import
const express =require('express');
const app =express();
const port=8080;
// tacher way
// const publicpath=path.join(__dirname,'public','img/meeow.jpg')
// app.use(express.static(publicpath))
// app.listen(port,()=>console.info('listening on port 3000'));


// static files 
app.use(express.static('public'))
app.use('css',express.static(__dirname + "public/css"))
app.use( 'js',express.static(__dirname + "public/js"))
app.use('img',express.static(__dirname + "public/img"))

app.get('wow',(req, res)=>{
    res.sendFile(__dirname + 'html/index.html')
})

//  to change it from html  to the  ejs


// app.set('html','./html')
// app.set('view engine','ejs')

// // // to get the files (pictures)
// app.get('',(req, res) => {
//     res.render('index')

// })
 app.listen(port,()=>console.info('listening on port 3000'));







// listen to port 3000
