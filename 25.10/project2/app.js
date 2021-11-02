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
// console.log('app is loading');
// const express =require("express");
// const app=express();
// const path = require("path");
// const publicPath = path.join(__dirname,"public");
// const axios = require("axios");
// const PORT=8080;
// // to a wake all the static files
// app.use(express.static(publicPath));
// // the  http request by city
// app.get("/city",(req,res)=>{
//     // we need  the apikey and city name cuz its search by api key also
//     const apiKey="391d302dfcdf37716d65a5eaf6ed9db2";
//     const city=req.query.city;

//   const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   to check if its work
//     console.log(url);
//     axios
//     .get(url)
//     .then(function (response) {

//         if(response.status === 200){
//             // 
//             const lon=response.data.coord.lon;
//             const lat=response.data.coord.lat;
//             res.send(`<h1>city : ${city}</h1><h2> the lon is:${lon}</h2><h2>the lat is :${lat}</h2>`);
//         }
//     })
//     .catch((err)=>{
//         res.sendFile(path.join(__dirname,"public","error.html"));
//     });
// })

// app.listen(PORT);
// // one more time
// const express = require("express");
// const axios = require("axios")
// const path=require('path')
// const publicPath=path.join(__dirname,"public")
// const port=8080
// const app = express();
// // first a wake the static files
// app.use(express.static(publicPath));
// // now the method of get
// app.get("/city",function(req, res){
//     const city=req.query.city;
//     const APIKEY=yourapikey;
//  const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
//  axios.get(url)
//  .then((response)=>{
//      if(response.status ===200){

//  const lon=response.data.coord.lon;
//   const lat=response.data.coord.lat;
//    res.send(`<h1>city : ${lon}</h1><h2> the lon is:${lat}`)                              }
//  })
//  .catch((error))
//  res.sendFile(publicPath,"error.html")   
// })
// app.listen(PORT);
// in the 3 times
// 6 varlible
// 3 require('')
// 3 varlible

// const express=require('express');
// const path=require('path');
// const axios=require('axios');
// const publicPath=path.join(__dirname,"public")
// const app=express();
// const port=8080;
// // now we need to awake alll the static files 
// app.use(express.static(publicPath));
// // now when we a wake the files we need to take care the http request 
// // get method always with function req and res 
// app.get("/city",(req, res)=> 
// {
//     // every city that user wil enter its wil give him the result of of lon and lan
// const city=req.query.city;
// const APIKEY="391d302dfcdf37716d65a5eaf6ed9db2";;
//   const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
// //   axios is to take care the http request
//   axios (url)
//   .then(function (response) {
//      if (response.status === 200){
//       const lon = response.data.coord.lan;
//       const lat=response.data.coord.lat;
//       res.send(`<h1> your city : ${city} </h1><h2> the lon is:${lon}</h2> <h2>the lat is:${lat}</h2>`)
//   }})
//   .catch(err =>{
//       res.send(err)
//   })
// })
// app.listen(port)

// in the  4 time workout
// 3 require
// 3 varlible
// 3 varlible in express get methods
// use the axios service
// listen on port in the end
const express=require("express")
const path = require("path")
const axios = require("axios")
const publicPath=path.join(__dirname,"public")
const port=8080;
const app=express();




                  





























