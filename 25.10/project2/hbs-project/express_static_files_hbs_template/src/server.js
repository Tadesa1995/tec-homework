const express = require("express");
const axios= require("axios")
const path = require("path"),
  app = express(),
  PORT = 8080,
  // cuz the src folder is in public directory that why need to write .. and then public
  publicPath = path.join(__dirname, "..", "public");

// --- hbs stuff
const hbs = require("hbs"),
  viewsPath = path.join(__dirname, "..", "templates","views"),
  partialsPath = path.join(__dirname, "..", "templates","partials");
app.set("view engine", "hbs");
// --- use non default name , here use templates directory
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// --- serve static html\css\js\image files
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  // --- serve index.hbs from views directory (templates in this case)
  res.render("index");
});

app.get("/about", (req, res) => {
  // --- serve support.hbs from views directory (templates in this case)
  res.render("about");
});

app.get("/help", (req, res) => {
  // --- serve help.hbs from views directory (templates in this case)
  res.render("help");
                                     
});
app.get("/error", (req, res) => {
  // --- serve help.hbs from views directory (templates in this case)
  res.render("error");
                                     
});
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







app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
