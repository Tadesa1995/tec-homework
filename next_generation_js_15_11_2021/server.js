
// my way!!
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
// my way!!!

// teacher way
// reference:object and array
// primetive data:string bolean numbers null,undeffined
// stack-fast ram but limeted with space that why its save the primitive values that not containe much space
// in stack its save also the aray and the object but he save in some place on the stack with the adress of the value 
//  and give him  inside the address of the real varlible  and he point it to the heape and the hape save it with the value
// heape: much memory slow but not limeted as stack the hape save it 







// 2.צור מערך מ1 עד 1000 בקפיצות 1 וחשב בעזרת map 
//  השורש הריבועי  (בחזקת חצי) של המערך והדפס אותו את.
// const arr=[]
// for (let index = 0; index < 1000; index++) {
//     arr.push(index)
// } 
// const sqrtNumbersArray=arr.map(item=>Math.sqrt(item))
// console.log(arr);
// console.log(sqrtNumbersArray);
// // 3.כתוב פונקציה arrow function אשר מקבל מערך של מספרים ומחזירה בעזרת filter מערך של המספרים הזוגיים.    
// my way!!!!!!!!!!
// const mixedNumbers=[10,2,3,4,56,6,7,6,7,9,8,98,8]
//        const evenNumbers =[]
// mixedNumbers.filter(x => {
//     if (x % 2 === 0)
//     evenNumbers.push(x)})
//     console.log(evenNumbers);
// 6 lines

    // teacher way-much shorters
  const allNum=[324,4324,324,3,5,6,7,7,7]
const getEven=arr=>{
return arr.filter(item=>item%2==0)
 }
console.log(getEven(allNum));
// 5 lines
// its agremment that every time when  write like this same name=>some name its write a return
// anohter way 
// declare a function out side 
// create a mixed array
// use filter and return both of them
// call the function and put the mixed array as argument





    
