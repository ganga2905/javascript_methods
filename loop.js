
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


















