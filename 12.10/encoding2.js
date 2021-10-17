const fs = require("fs")

fs.writeFileSync("english.txt","node is great")
const english = fs.readFileSync("english.txt")

console.log(english);

// we reccive here a list of  A strings at a binary base letters with numbers cuz without the encoding utf8
// the computer canot read it properly cuz the computer know only  binary base
// but if u wan to understand the binary bast go to websites of utf8 and convert it to letters the binary base that u get
//  so in order to reccive the corect encoding we need to add utf8 parmeter after the text 
// like this 
// const english = fs.readFileSync("english.txt","utf")
// console.log(english);
