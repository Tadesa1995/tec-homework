// 3.1 dirname=its like the first path that all the files born from  
// 3.2 path join just connect the folders to one path for example 
//  const publicPath = path.join(__dirname, "..", "public");
// here the path method is used to connect the public method to the dirname to one path
// app.use( express.static(publicPath));

// 3.3
// u reccived all the files that from index folder and the reason is cuz u was using the use method that ask u what u want u use like what u want to see and u type there the files that from folder that is name is public so that why u reccive all that 
// const publicPath = path.join(__dirname, "..", "public");
// app.use( express.static(publicPath));
// now if u want to change to public1(make sure to change in both side from the real dirctory and from use method that for the public cuz if u change only in use method its not gonna give u nothing) but for  images to img or css to styles u can change it but  in both side in the currnet folder and also in the url that u write on the html page .
// +Mead_nath_weather_location_web_server
// first declare 6 verlible
console.log('app is loading');
const express =require("express");
const app=express();
const path = require("path");
const publicPath = path.join(__dirname,"public");
const axios = require("axios");
const PORT=8080;
app.use(express.static(publicPath));

app.get("/city",(req,res)=>{
    
    const apiKey="391d302dfcdf37716d65a5eaf6ed9db2";
    let city=req.query.city;

    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    axios
    .get(url)
    .then(function (response) {

        if(response.status === 200){
            const lon=response.data.coord.lon;
            const lat=response.data.coord.lat;
            res.send(`<h1>city : ${city}</h1><h2> the lon is:${lon}</h2><h2>the lat is :${lat}</h2>`);
        }
    })
    .catch((err)=>{
        res.sendFile(path.join(__dirname,"public","error.html"));
    });
})

app.listen(PORT);