// let a=1,b;
//        b=a;
//        a++;
//        console.log(a,b);
// its wil print 2,1
// stack a=1 some id =b hape b=a
       // --- refrence type
//        let objA = {description : 'salary 1' , amount : 7000}, objB;
//        objB = objA;
//        objA.amount++;
//     //    
//        console.log(objA);//7001       console.log(objB);/7000
//        objB.description = 'salary 2';
       // they both wiil be the same 'salary 2'; the reason is cuz objB is containe the adress to access objA so what u change in objB is apply to objA
    //   stack some id =objA hape objA =description : 'salary 1' , amount : 7000
    //  stack some id =  objB hape objB= objA =>description : 'salary 1' , amount : 7000 ;
    // what u change on objA not applay to objB if u change him after u write objB =objA
    // cuz objB Point to the first adress of objA when he was create
    //    console.log(objA);       console.log(objB);

    //   let a=1,b;
    //    b=a;
    //    a+=2;
    //    stack a=1 some id=b hape b=a>1
    // with a+=2 its write like a+2>like 1 +2 that why its 3 
    // but the b stay the same value cuz he  Point to the first adress of a when he was create and its  1
    //  console.log(a,b);
 
       // --- refrence type
    //    let objA = {description : 'salary 3' , amount : 7000}, objB;
    //    objB = objA;
    //    objA.amount++;
    //    console.log(objA);       console.log(objB);
    //    objB.description = 'salary 2';
    //    console.log(objA);       console.log(objB);
// stack objA= =  objB hape objB= objA =>description : 'salary 1' , amount : 7000 ;
    // what u change on objA not applay to objB if u change him after u write objB =objA
    // cuz objB Point to the first adress of objA when he was create


// let a=1,b,obj1 = {name : 'Avi'},obj2;  
// b=a;
// a=2;
// console.log(b,b==a);//1 false 

// obj2=obj1;
// obj1.name='Yossi';
// console.log(obj2,obj1 == obj2);//{ name: 'Yossi' } true


// let array1,array2 = [1,2,3,6];  
// array1 = array2;
// array1[0]=8;
// array2[1]=18;
// console.log(array1 == array2);//true
// console.log(array1,array2)//[ 8, 18, 3, 6 ] [ 8, 18, 3, 6 ]


// let array1 = [{ name: "Jim", age: 33 }, { name: "John", age: 22 }],
//  array2 = [1, 2, 3, 6],
//  a,
//  obj1;

// a = array2[2];
// a = 44;
// console.log(array2);//[1, 2, 3, 6]

// obj1 = array1[1];
// obj1.age = 55;
// console.log(array1);//[ { name: 'Jim', age: 33 }, { name: 'John', age: 55 } ]
 

