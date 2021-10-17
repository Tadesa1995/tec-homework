// // exception_1
// // let e=true
// let e=false
// console.log(1)
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);
// if e its true =1245
// the reason is simple cuz when its true its throw exeption and cancle every thing after him that why its not print 3 but when we use the catch its stop the exception by catch the eror so its print u every thing that after him

// if e its false=1235=the reason is when there no eror so the catch is not working cuz he didnt catch nothing so what inside the catch is nothing cuzz he didnt catch nothing

// exception_2
// e = false = 1,2,3,clean up 5 .[.reason why its diffrent then catch cuz finally method say always to work no matter if have eror or not] 
// e = true => 1,2,4,clean up 5.[ reason why its diffrent then catch cuz finally method say always to work no matter if have eror or not]

// exception_3

function safeDiv(num1,num2) {
    try {
        if (num2 ==0) {
            throw "denominator is 0"
        }
        console.log(num1 / num2);
    } catch (error) {
        console.log(error);
    }
}
safeDiv(process.argv[2],process.argv[3])