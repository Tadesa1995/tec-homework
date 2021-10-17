// //answer to  quistion 1
// let numbers = [120,50,70,80,90,90,70];
// function checkValue(value) {
//     return value===120;
// }
// let result=numbers.find(checkValue);
// if (result == undefined) {
//     console.log("this value didnt found");
// }else{
//     console.log(result);
//     console.log(numbers.indexOf(result));
// }

// answer to quistion 2
//  let numbers1=[20,60,80,90,80]
//  let num=(process.argv[2])
//  if (num=="max") {
//      console.log(numbers1[3]);
//  }
//  else if (num==="min") {
//      console.log(numbers1[0])
// }
//  else if (num==="sum") {
//       let sum=0
//      for (let i = 0; i < numbers1.length; i++) {
//       sum+=numbers1[i]}
//       console.log(sum);}

//     else if (num==="avg"){
//       let sum=0
// let avg;
//          for (let i = 0; i < numbers1.length; i++) {
//           sum+=numbers1[i]}
// avg=sum/numbers1.length;
//      console.log(avg);
//      }
//  answer to quistion 3
// let numbers1 = [20, 60, 80, 90, 80];
// let num = process.argv[2];
// switch (num) {
//   case 'max':
//     console.log(numbers1[3]);
//     break;
//   case 'min':
//     console.log(numbers1[0]);
//     break;
//   case 'sum':
//     let all=0
//         for (let i = 0; i < numbers1.length; i++) {
//          all+=numbers1[i]}
//          console.log(all);
//     break;
//   case'avg':
//     let sum=0
//     let avg;
//  for (let i = 0; i < numbers1.length; i++) {
//  sum+=numbers1[i]}
//  avg=sum/numbers1.length
//         console.log(avg);
//     break;
// }
// שאלות על filesync
// const fs=require('fs')
// let text= (process.argv[2])
// let file=(process.argv[3])
// file='heyy'
// // its open a dirctory of text with heyy
// fs.writeFileSync(text,file)
// // but when we use write file and try to add its replace the text
// fs.writeFileSync(text,'the best in every thing')
// answer to quistion number2
// const fs=require('fs')
// let text= (process.argv[2])
// text='roniii.txt'

// let final=fs.readFileSync(text,'utf8')
// console.log(final);
// answer to quistion number3
// const fs=require('fs')
// let text= (process.argv[2])
// let file=(process.argv[3])
// file='heyy'
// // // its open a dirctory of text with heyy
//  fs.writeFileSync(text,file)
// const fs=require('fs')
// // // but when we use write file and try to add its replace the text
//  fs.writeFileSync(text,'the best in every thing',{flag:'a'})
// answer to quistion number4
const fs = require("fs");
let file = process.argv[2];
// //  file names
let textToFile = { name: "book1", pages: 123 };
//  // convert to json
let jsonBook = JSON.stringify(textToFile);
// // let textToFile={name : book1 , pages : 123};
fs.writeFileSync(file, jsonBook);
// teacher way
// const fs=require("fs")
// let file=(process.argv[2])
// let book1=(process.argv[3])
// let pages=Number(process.argv[4])
// let books={name:book1, pages:pages}
// let booksJson=JSON.stringify(books)
// fs.writeSync(file,booksJson)
// העברת אובייקט
// 
// 
    // u can also writ with return 
// } else {const name = (process.argv[2]);
// const age = Number(process.argv[3]);
// let persons = [
//   { name: "toni", age: 40 },
//   { name: "moni", age: 44 },
//   { name: "roni", age: 46 },
//  ]; 
//  simple way
// console.log(name);
// console.log(age);
// another way

// const person = {name:name, age:age}
// persons.push(person)
// console.log(persons);
// } 

