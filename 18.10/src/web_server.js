// web_server_1.5
// כתוב שרת node שמאזין על port 8080 ומחזיר לדפדפן קובץ index.html אם פונים אליו עם localhost:8080 ומחזיר קובץ about.html אם פונים אליו עם localhost:8080/about.html. בקובץ index.html הכנס אלמנט h1  עם הטקסט index . בקובץ about.html הכנס אלמנט h1  עם הטקסט about. לכל קובץ html הוסף לינקים שיאפשרו לעבור לדפים האחרים. לדוגמא מדף Index אפשר יהיה לעבור לדף about ומדף about אפשר יהיה לעבור לדף index
const express = require('express');
 const path = require('path');
const app =express();
const port = 8080;
const server = express();

app.get('/',(req, res) =>{
res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','index.html'));
})
app.get('/about',(req, res) =>{
    res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','about.html'));
})

console.log(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','index.html'));

// // הרחב את web_server_1.5 כך שהאתר יכיל גם את הדפים הבאים : contact , courses , mentoring ,testimonials , events בדיוק כמו שהוספתם את הדפים index,about בתרגיל הקודם
// web server 1.6
app.get('/courses',(req, res) =>{
    res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','courses.html'));
    })
    app.get('/mentoring',(req, res) =>{
        res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','mentoring.html'));
        })
        app.get('/events',(req, res) =>{
            res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','events.html'));
            })
            app.get('/testimonials',(req, res) =>{
                res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','testimonials.html'));
                })
                app.get('/contact',(req, res) =>{
                    res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','contact.html'));
                    })
         

app.listen(port)
console.log("loading");








// app.get('/',(req, res) =>{
//   res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','index.html'));
// })
// app.get('/about',(req, res) =>{
// // res.send(`<h1 style="color:red;"><i>about<i></h1>`)
// res.sendFile(path.join(`C:`,`ajax js`,`tec-homework`,`18.10`,'public','about.html'));

// }) 
// app.listen(port);


