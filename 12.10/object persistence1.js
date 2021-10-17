// const fs = require(`fs`)

// const books = [
//     {name:"tito ortiz" ,description:"mma", pages:400 },
//     {name:"lyoto machida" ,description:"karate", pages:200 },
//     {name:"vitor belfort" ,description:"boxing", pages:600 }
// ]

// const booksJson = JSON.stringify(books)

// fs.writeFileSync("books.txt",booksJson)
// object persistence2
const fs = require(`fs`);

const books = fs.readFileSync("books.txt", "utf-8");
let booksObj = JSON.parse(books);

let min = booksObj[0].pages;
let minBook; 
booksObj.forEach((element,index) => {
    if(element.pages < min){
        min = element.pages
        minBook = element.name
    }
});

console.log(`the book: ${minBook} have this lowest pages : ${min}`);