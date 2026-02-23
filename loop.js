
for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}


for(let i=0;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
    
}

let group=[
    ["ram","sam","ravi"],
    ["kumar","tiya",]
]
/*
Intermediate Array Questions (10 
Questions) */
1. 

// Given an array of marks, write a program to find the highest and lowest value without 
// using Math.max or Math.min. 


// let num=[10,20,30,40,50,2];

// let max=num[0];
// // console.log(max);

// for(let i=1;i<=num.length;i++){
//     if(num[i]>max){
//         max=num[i]
//     }
// }
// console.log(max);

// let min=num[0];
// for(let i=1;i<=num.length;i++){
//     if(num[i]<min){
//         min=num[i]
//     }
// }
// console.log(min);




// let max=Math.max(...num);
// let mini=Math.min(...num);
// console.log(max,mini);


// 2. 
// Given two arrays: 
// [1, 2, 3] 
// [4, 5, 6] 
// Merge them into one array without using spread operator or concat. (Use loop)


/*let arr = [];

arr[arr.length] = 10;
arr[arr.length] = 20;
arr[arr.length] = 30;

console.log(arr);
*/

console.log("***");

let arr = [];

arr[arr.length] = arr;



let a=[1, 2, 3];
let b=[4, 5, 6];

console.log(b.length);
b.length=0;
console.log(b.length);



// let e=[...a,...b];
// console.log(e);


// let d=a.concat(b)
// console.log(d);



let c=[];
for(let i=0;i<a.length;i++){
    c[c.length]=a[i]
}

for(let i=0;i<b.length;i++){
    c[c.length]=b[i]
}
console.log(c);


// 3. 
// Given an array of names, count how many names start with the letter 'A' using a loop. 

const name=["ganga","gayathri","harish","aadhi","abinav","abi"];

let count=0;

for(let i=0;i<name.length;i++){
    if(name[i][0]==='a'){
        count++
    }
}

console.log(count);



// 4. 
// Create a new array containing only the numbers greater than 50 from the given array 
// using a loop (not filter). 


let num=[10,50,70,45,60,35,85];

let output1=[];
for(let i=0;i<num.length;i++){
    if(num[i]>50){
        output1[output1.length]=num[i]
    }
}
console.log(output1);


// 5. 
// You have an array [10, 20, 30, 40, 50]. 
// Reverse this array manually using a loop (do not use reverse()). 

let rever=[10, 20, 30, 40, 50];
let output2=[];

for(let i=rever.length-1;i>=0;i--){
      output2[output2.length]=rever[i]

}
console.log(output2);



// 6. 
// Given an array of strings, convert all strings to uppercase using a loop (no map).
const nameG=["ganga","hari","aadhi"]; 
const nameR=[]
for(let i=0;i<nameG.length;i++){

}


// 7. 
// Given an array of numbers [5, 10, 15, 20, 25], create a new array where each value 
// is divided by 5. 

const numD=[5, 10, 15, 20, 25];
let resD=[];
for(let i=0;i<numD.length;i++){
    resD[resD.length]=numD[i]*5
}

console.log(resD);


// 8. 
// Given an array of ages, count how many people are: 
// ● below 18 
// ● between 18 and 60 
// ● above 60 

const ages=[21,56,35,12,45,12,85,21,25];
let count18 =0;
let count19=0;
let count60=0;

for(let i=0;i<ages.length;i++){
    if(ages[i]<18){
        count18++
    }
    else if(ages[i]>=18&& ages[i]<=60){
        count19++
    }
    else{
        count60++
    }
}
console.log(count18,count19,count60);



// 9. 
// Loop through an array of objects: 
// [{name:"Ravi", age:16}, {name:"Akash", age:22}, {name:"Mani", age:30}] 
// Print the names of people whose age is above 18. 

const nameO=[
    {name:"Ravi", age:16},
     {name:"Akash", age:22}, 
     {name:"Mani", age:30}] ;

     for (let i=0;i<nameO.length;i++){
        if(nameO[i].age>18){
            console.log(nameO[i].name);
            
        }
     }

// 10. 
// Given an array of mixed data types: 
// [10, "hello", true, 50, "js", 99] 
// Create a new array that contains only numbers*/


const dataType=[10, "hello", true, 50, "js", 99];

let onlyN=[];

for(let i=0;i<dataType.length;i++){
    if(typeof dataType[i]==="number"){
        onlyN[onlyN.length]=dataType[i]
    }
}
console.log(onlyN);





// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.

let nump=[1, 2, 4, 5];
let resP=[]

for(let i=0;i<nump.length;i++){
    resP[resP.length]=nump[i]
    if(nump[i]===4){
        resP[resP.length]=3
    }
}
 console.log(resP);


//2. Remove the third element from the array [10, 20, 30, 40, 50].



// 3.Replace the second element in the array [5, 10, 15] with 20.

//4. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].

//// 5.Insert the element 99 at the beginning of the array [10, 20, 30].


// 6.Remove the last element from the array [2, 4, 6, 8, 10].


// 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].


//8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.

// 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.

 // 11.Remove the element at index 3 from the array [100, 200, 300, 400, 500].

 //12. Replace the last element in the array [1, 2, 3, 4, 5] with 10.

 
 // 13.Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].


//14. Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].


//15. Insert the elements 25 and 30 at the end of the array [10, 20].

// 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].



// 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.


// 18.Remove the second-to-last element from the array [2, 4, 6, 8, 10].

// 19.Replace the element at index 1 in the array [3, 6, 9] with 12.


//20. Add the elements 100 and 200 at the beginning of the array [300, 400, 500].

//21. Remove all occurrences of 42 from the array [42, 42, 42, 42, 42].

//// 22.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].
//23. Replace the last occurrence of 8 with 80 in the array [8, 16, 24, 8, 32].
//24 Given the array [2, 4, 6, 8, 10], insert 5 between 4 and 6.

//25. Remove all elements from the array [11, 22, 33, 44, 55].
// 26.Replace the first element in the array [7, 14, 21] with 10
// 27.Add the elements 1 and 2 at the end of the array [3, 4, 5]
// 28.Remove the element at index 0 from the array [50, 40, 30, 20, 10].
// 29.Replace all occurrences of 6 with 60 in the array [6, 12, 18, 6, 30].

// 30.Given the array [3, 6, 9, 12, 15], insert 7 at index 3.















