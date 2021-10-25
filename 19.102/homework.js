// 3.1 dirname=its like the first path that all the files born from  
// 3.2 path join just connect the folders to one path for example 
//  const publicPath = path.join(__dirname, "..", "public");
// here the path method is used to connect the public method to the dirname to one path
// app.use( express.static(publicPath));

// 3.3
// u reccived all the files that from index folder and the reason is cuz u was using the use method that ask u what u want u use like what u want to see and u type there the files that from folder that is name is public so that why u reccive all that 
// const publicPath = path.join(__dirname, "..", "public");
// app.use( express.static(publicPath));
// now if u want to change to public1(make sure to change in both side from the real dirctory and from use method that for the public cuz if u change only in use method its not gonna give u nothing) but for  images to img or css to styles u can change it but if in both side in the currnet folder and also in the url that u write on the html page 
// 3.4





// 3.5
// u can find it by console.log(req.query)
// its print the user request