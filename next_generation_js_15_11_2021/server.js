// Main Difference :

// Main difference between value type and reference type is value type copy a data while reference types share a single copy of their data.Value Type immutable its mean when we create a instance with a value type its create a unique copy of data and it can’t change but reference type is mutable its value can be change ..
// When Use Value Type :

//     Comparing instance data with == makes sense
//     You want copies to have independent state
//     The data will be used in code across multiple threads.So that you don’t have to worry about the data being changed from another thread.

// When use Reference Type:

//     Comparing instance identity with === makes sense
//     You want to create shared, mutable state

// How Store In Memory:

// In Common Type System :

// 1.Value Type — Get Stored on Stack Memory.
// 2. Reference Type — Get Stored on Managed Heap Memory
// 2.צור מערך מ1 עד 1000 בקפיצות 1 וחשב בעזרת map 
//  השורש הריבועי  (בחזקת חצי) של המערך והדפס אותו את.
const arr=[]

for (let index = 0; index < 1000; index++) {
    arr.push(index)
} 
const sqrtNumbersArray=arr.map(item=>Math.sqrt(item))
console.log(arr);
console.log(sqrtNumbersArray);
// 3.כתוב פונקציה arrow function אשר מקבל מערך של מספרים ומחזירה בעזרת filter מערך של המספרים הזוגיים.    
const mixedNumbers=[10,2,3,4,56,6,7,6,7,9,8,98,8]
       const evenNumbers =[]
mixedNumbers.filter(x => {
    if (x % 2 === 0)
    evenNumbers.push(x)})
    console.log(evenNumbers);

    
