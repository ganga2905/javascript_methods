
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
// 1. 

 // Given an array of marks, write a program to find the highest and lowest value without 
// using Math.max or Math.min. 


let num=[10,20,30,40,50,2];

let max1=num[0];

 console.log(max1);

 for(let i=0;i<num.length;i++){
     if(num[i]>max1){
         max1=num[i]
     }
 }
 console.log(max1);

 let min=num[0];
 for(let i=0;i<num.length;i++){
    if(num[i]<min){
        min=num[i]
     }
}
console.log(min);

let max2=Math.max(...num);
let mini2=Math.min(...num);
console.log(max2,mini2);


// // 2. 
// // Given two arrays: 
// // [1, 2, 3] 
// // [4, 5, 6] 
// // Merge them into one array without using spread operator or concat. (Use loop)


// /*let arr = [];

// arr[arr.length] = 10;
// arr[arr.length] = 20;
// arr[arr.length] = 30;

// console.log(arr);
// */

// console.log("***");

// let arr = [];

// arr[arr.length] = arr;



// let a=[1, 2, 3];
// let b=[4, 5, 6];

// console.log(b.length);
// b.length=0;
// console.log(b.length);



// // let e=[...a,...b];
// // console.log(e);


// // let d=a.concat(b)
// // console.log(d);



// let c=[];
// for(let i=0;i<a.length;i++){
//     c[c.length]=a[i]
// }

// for(let i=0;i<b.length;i++){
//     c[c.length]=b[i]
// }
// console.log(c);


// // 3. 
// // Given an array of names, count how many names start with the letter 'A' using a loop. 

// const name=["ganga","gayathri","harish","aadhi","abinav","abi"];

// let count=0;

// for(let i=0;i<name.length;i++){
//     if(name[i].startsWith('a')){
//         count++
//     }
// }

// console.log(count);

// console.log("***********");


// // 4. 
// // Create a new array containing only the numbers greater than 50 from the given array 
// // using a loop (not filter). 


// let num=[10,50,70,45,60,35,85];

// let output1=[];
// for(let i=0;i<num.length;i++){
//     if(num[i]>50){
//         output1[output1.length]=num[i]
//     }
// }
// console.log(output1);


// // 5. 
// // You have an array [10, 20, 30, 40, 50]. 
// // Reverse this array manually using a loop (do not use reverse()). 

// let rever=[10, 20, 30, 40, 50];
// let output2=[];

// for(let i=rever.length-1;i>=0;i--){
//       output2[output2.length]=rever[i]

// }
// console.log(output2);



// // 6. 
// // Given an array of strings, convert all strings to uppercase using a loop (no map).
// const nameG=["ganga","hari","aadhi"]; 
// const nameR=[]
// for(let i=0;i<nameG.length;i++){
//         nameR[nameR.length]=nameG[i].toUpperCase()
// }
// console.log(nameR);



// // 7. 
// // Given an array of numbers [5, 10, 15, 20, 25], create a new array where each value 
// // is divided by 5. 

// const numD=[5, 10, 15, 20, 25];
// let resD=[];
// for(let i=0;i<numD.length;i++){
//     resD[resD.length]=numD[i]*5
// }

// console.log(resD);


// // 8. 
// // Given an array of ages, count how many people are: 
// // ● below 18 
// // ● between 18 and 60 
// // ● above 60 

// const ages=[21,56,35,12,45,12,85,21,25];
// let count18 =0;
// let count19=0;
// let count60=0;

// for(let i=0;i<ages.length;i++){
//     if(ages[i]<18){
//         count18++
//     }
//     else if(ages[i]>=18&& ages[i]<=60){
//         count19++
//     }
//     else{
//         count60++
//     }
// }
// console.log(count18,count19,count60);



// // 9. 
// // Loop through an array of objects: 
// // [{name:"Ravi", age:16}, {name:"Akash", age:22}, {name:"Mani", age:30}] 
// // Print the names of people whose age is above 18. 

// const nameO=[
//     {name:"Ravi", age:16},
//      {name:"Akash", age:22}, 
//      {name:"Mani", age:30}] ;

//      for (let i=0;i<nameO.length;i++){
//         if(nameO[i].age>18){
//             console.log(nameO[i].name);
            
//         }
//      }

// // 10. 
// // Given an array of mixed data types: 
// // [10, "hello", true, 50, "js", 99] 
// // Create a new array that contains only numbers*/


// const dataType=[10, "hello", true, 50, "js", 99];

// let onlyN=[];

// for(let i=0;i<dataType.length;i++){
//     if(typeof dataType[i]==="number"){
//         onlyN[onlyN.length]=dataType[i]
//     }
// }
// console.log(onlyN);




// console.log("--------------------");


// // 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.

// let nump=[1, 2, 4, 5];
// let resP=[]

// for(let i=0;i<nump.length;i++){
//          resP[resP.length]=nump[i]
//     if(nump[i]===4){
//         resP[resP.length]=3
//     }
// }
//  console.log(resP);


// //2. Remove the third element from the array [10, 20, 30, 40, 50].




// let arrRemove=[10, 20, 30, 40, 50];

// let outputR=[];

// for(let i=0;i<arrRemove.length;i++){
//     if(arrRemove[i]===40){
//         continue;
//     }
//     outputR[outputR.length]=arrRemove[i]

// }
// console.log(outputR);




// // 3.Replace the second element in the array [5, 10, 15] with 20.

// let numR=[5, 10, 15];
// let ansR=[];
// for(let i=0;i<numR.length;i++){
//     if(numR[i]===15){
//         ansR[ansR.length]=20;
//     }
//     ansR[ansR.length]=numR[i]
// }
// console.log(ansR);




// //4. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].



// let numA=[1, 2, 3, 4, 5];

// let ansA=[];
// for(let i=0;i<numA.length;i++){
//    ansA[ansA.length]=numA[i]
// }
//    ansA[ansA.length]=7
//    ansA[ansA.length]=8
// console.log(ansA);



// //// 5.Insert the element 99 at the beginning of the array [10, 20, 30].

// let arrI=[10, 20, 30];
// arrI[arrI[0].length]=99
// console.log(arrI);

// // 6.Remove the last element from the array [2, 4, 6, 8, 10].

// let arrR=[2, 4, 6, 8, 10];

// let indexL=arrR.indexOf(10);
// console.log(indexL);

// let arrR1=[];

// for(let i=0;i<arrR.length;i++){
//     if(i===indexL){
//         continue;
//     }
//     arrR1[arrR1.length]=arrR[i]

// }
// console.log(arrR1);


// let a1=[2,4,6,8,10];
// let a2=[];
// for(let i=0;i<a1.length-1;i++){
//     a2.push(a1[i])
// }

// console.log(a2);


// // 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].

// let a3=[5, 10, 5, 20, 5];
// let a4=[];

// for(let i=0;i<a3.length;i++){
//     if(a3[i]===5){
//         a4[a4.length]=50
//     }else{
//     a4[a4.length]=a3[i]
//     }

// }
// console.log(a4);

// //8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.

// let a5=[3, 6, 9, 12, 15];
// let a6=[];

// for(let i=0;i<a5.length;i++){
//      if(i==2){
//         a6[a6.length]=0
//      }
//      a6[a6.length]=a5[i]
// }
// console.log(a6);





// // 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// let a7=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a8=[];

// for(let i=0;i<a7.length;i++){
//     if(a7[i]%2===0){
//         a8[a8.length]=a7[i]
//     }
// }
// console.log(a8);


// // 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.

// let a9=[5, 10, 20, 30];
// let a10=[];

// for(let i=0;i<a9.length;i++){
//     if(a9[i]===20){
//         a10[a10.length]=15
//     }
//     a10[a10.length]=a9[i];
// };
// console.log(a10);





//  // 11.Remove the element at index 3 from the array [100, 200, 300, 400, 500].

//  let a11= [100, 200, 300, 400, 500];
//  let index=a11.indexOf(400);
//  let a12=[]
//  for(let i=0;i<a11.length;i++){
//      if(i===3){
//         continue
//      }
//      a12[a12.length]=a11[i]
//  }
//  console.log(a12);
 

//  //12. Replace the last element in the array [1, 2, 3, 4, 5] with 10.

//  let a13=[1, 2, 3, 4, 5];

// a13[a13.length-1]=10;
// console.log(a13);
 
//  // 13.Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].

//  let a14=[1, 2, 3, 4, 5];
//  let a15=[];
//  let a16=[8,9,10];

//  for(let i=0;i<a16.length;i++){
//     a15[a15.length]=a16[i]
//  }
//  for(let i=0;i<a14.length;i++){
//     a15[a15.length]=a14[i]
//  }

//  console.log(a15);
 

// //14. Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].

// let a17=[7, 14, 21, 7, 28];
// let posi=a17.indexOf(7);
// let a18=[]

// for(let i=0;i<a17.length;i++){
//     if(i===posi){
//         continue
//     }
//     a18[a18.length]=a17[i]
// }
// console.log(a18);



// //15. Insert the elements 25 and 30 at the end of the array [10, 20].

// let a19=[10, 20];
// a19[a19.length]=25
// a19[a19.length]=30;
// console.log(a19);


// // 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].

// let a20=[0, 1, 0, 1, 0];

// let a21=[];

// for(let i=0;i<a20.length;i++){
//     if(a20[i]===0){
//         a21[a21.length]=1
//     }
//     else{
//         a21[a21.length]=a20[i]
//     }
// }
// console.log(a21);

// // 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.

// let a22= [5, 10, 15, 20, 25];
//  let a23=[];
//  for(let i=0;i<a22.length;i++){
//     if(a22[i]===15){
//         a23[a23.length]=12
//     }
//     a23[a23.length]=a22[i]
//  }
//  console.log(a23);
 
// // 18.Remove the second-to-last element from the array [2, 4, 6, 8, 10].

// let a24=[2, 4, 6, 8, 10];
// let a25=[];

// let removeIndex = a24.length - 2;

// for(let i=0;i<a24.length;i++){
//     if(i === removeIndex){
//         continue;
//     }
//     a25.push(a24[i]);
// }

// console.log(a25);


// // 19.Replace the element at index 1 in the array [3, 6, 9] with 12.

// let a26=[3, 6, 9];

// a26[1]=12;
// console.log(a26);

// //20. Add the elements 100 and 200 at the beginning of the array [300, 400, 500].

// let a27=[300, 400, 500];
// let a28=[100,200];
//  let a29=[]

//  for(let i=0;i<a28.length;i++){
//     a29[a29.length]=a28[i]
//  }

//  for(let i=0;i<a27.length;i++){
//     a29[a29.length]=a27[i]
//  }
// console.log(a29);

// //21.Remove all occurrences of 42 from the array [42, 42, 42, 42, 42].


// let a30=[42, 42, 42, 42, 42];
// let a31=[];


// for(let i=0;i<a30.length;i++){
//     if(a30[i]!==42){
//         a31[a31.length]=a30[i]
//     }
// }
// console.log(a31);

// // 22.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].

// let a32=[1, 2, 3, 4, 5, 6];
// a32[a32.length]=7;
// console.log(a32);
// //23. Replace the last occurrence of 8 with 80 in the array [8, 16, 24, 8, 32].
// let a33=[8, 16, 24, 8, 32];

// for(let i=a33.length-1;i>=0;i--){
//     if(a33[i]===8){
//         a33[i]=80
//         break;
//     }

// }
// //  a33[a33.length-2]=80;
//  console.log(a33);
 

// //24 Given the array [2, 4, 6, 8, 10], insert 5 between 4 and 6.

// let a34=[2, 4, 6, 8, 10];

// let a35=[];

// for(let i=0;i<a34.length;i++){
//     if(a34[i]===6){
//         a35[a35.length]=5
//     }
//     a35[a35.length]=a34[i]
// }
// console.log(a35);


// //25. Remove all elements from the array [11, 22, 33, 44, 55].

// let a36=[11, 22, 33, 44, 55];

// a36.length=0;

// console.log(a36);


// // 26.Replace the first element in the array [7, 14, 21] with 10

// let a37=[7, 14, 21];

// for(let i=0;i<a37.length;i++){
//     if(i===0){
//         a37[0]=10
//     }
// }
// console.log(a37);


// // 27.Add the elements 1 and 2 at the end of the array [3, 4, 5]


// let a38 =[3, 4, 5];
// let a39=[1,2];
// let a40=[]
// for(let i=0;i<a39.length;i++){
//     a40[a40.length]=a39[i]
// }
// for(let i=0;i<a38.length;i++){
//        a40[a40.length]=a38[i]
// }
// console.log(a40);


// // 28.Remove the element at index 0 from the array [50, 40, 30, 20, 10].

// let a41= [50, 40, 30, 20, 10];

// let a42=[];

// for(let i=0;i<a41.length;i++){
//     if(i===0){
//         continue;
//     }
//     a42[a42.length]=a41[i]
// }
// console.log(a42);

// // 29.Replace all occurrences of 6 with 60 in the array [6, 12, 18, 6, 30].
// let a43=[6, 12, 18, 6, 30];
// let a44=[]
 
// for(let i=0;i<a43.length;i++){
//     if(a43[i]===6){
//         a44[a44.length]=60
//     }
//     else{
//         a44[a44.length]=a43[i]
//     }
    
// }
// console.log(a44);




// // 30.Given the array [3, 6, 9, 12, 15], insert 7 at index 3.

// let a45=[3, 6, 9, 12, 15];

//  a45[3]=7
//  console.log(a45);
 






// // let n=[1,3];

// // let m=[2,4];

// // let result = [];

// // for (let i = 0; i < n.length; i++) {
// //     result[result.length] = n[i];  // first array element
// //     result[result.length] = m[i];  // second array element
// // }

// // console.log(result);


// // find the largest number :-

// let largerstNum=[10,20,101,20,50];

// let max=largerstNum[0]
// for(let i=0;i<largerstNum.length;i++){
//     if(largerstNum[i]>max){
//         max=largerstNum[i]
//     }
// }
// console.log(max);

// // find second largest number:-


// var addTwoNumbers = function(l1, l2) {
//     for(let i=l1.length-1;i>=0;i--){
//         for(let k=l2.length-1;k>=0;k--){
//             num = l1[i]+l2[k]; 
//             return [i,k]

//         }
//     }
    
// };
// console.log(addTwoNumbers([2,4,3],[5,6,4]));





// /*Check whether a string is palindrome.

// Example

// madam → palindrome
// hello → not palindrome*/


// let p="madam"

// let p1='';

// for(let i=p.length-1;i>=0;i--){
//     p1+=p[i]
// }
// if(p===p1){
//     console.log("palindromee");
    
// }
// else{
//     console.log("not");
    
// }

// function pali(str){
//     let rever=str.split('').reverse().join('')
// return str===rever
// }
// console.log(pali("madam"));



// write a program to mergee two array and sort the result:-

let arr1=[3,1];
let arr2=[4,2];


let output=[];

for(let i=0;i<arr1.length;i++){
    output[output.length]=arr1[i]
}
for(let i=0;i<arr2.length;i++){
    output[output.length]=arr2[i]
}

let re=output.sort((a,b)=>a-b);
console.log(re);

let a = 5;
let b = 10;

let c=a;
a=b;
b=c
console.log(a,b);

let arr = [7,3];

let tem=arr[0];

arr[0]=arr[1];

arr[1]=tem

console.log(arr);


let arry = [4,2];

for(let i=0;i<arry.length;i++){
    for(let l=i+1;l<arry.length;l++){
        if(arry[i]>arry[l]){
            let temp=arry[i];
            arry[i]=arry[l]
            arry[l]=temp
        }

    }
}

console.log(arry);


let a1 = 12;
let b1 = 7;
let c1=a1
a1=b1
b1=c1

console.log(a1,b1);


let arrA = [9,4];

let arrC=arrA[0];
arrA[0]=arrA[1]
arrA[1]=arrC;
console.log(arrA);


let arrS = [8,3];

for(let i=0;i<arrS.length;i++){
    for(let k=i+1;k<arrS.length;k++){
        if(arrS[i]>arrS[k]){
            let temp=arrS[i]
            arrS[i]=arrS[k];
            arrS[k]=temp
        }
    }
}
console.log(arrS);

let arrI = [5,1,4,2];
for(let i=0;i<arrI.length;i++){
    for(let k=i+1;k<arrI.length;k++){
        if(arrI[i]>arrI[k]){
            let tem=arrI[i];
            arrI[i]=arrI[k];
            arrI[k]=tem


        }
    }

}
console.log(arrI);

//Find Largest Number
let arrL = [3,7,2,9,4];

let max=arrL[0];

for(let i=0;i<arrL.length;i++){
    if(arrL[i]>max){
        max=arrL[i]
    }
}
console.log(max);


//Count Even Numbers

let arrE = [2,5,6,9,8];
let count=0
for(let i=0;i<arrE.length;i++){
    if(arrE[i]%2==0){
        count++
    }
}
console.log(count);


//Reverse Array:-

let arrR = [1,2,3,4];

for(let i=arrR.length-1;i>=0;i--){
    arrR=arrR[i]
}
console.log(arrR);

/*Swap Two Numbers
let a = 5;
let b = 9;

👉 Swap pannunga

Expected Output

9 5*/
let aS = 5;
let bS = 9;

let cS=aS;
aS=bS;
bS=cS;

console.log(aS,bS);

/*

2️⃣ Reverse a String
let str = "hello";

Expected Output

olleh
*/
let strC = "hello";
let ou=''

for(let i=strC.length-1;i>=0;i--){
    ou+=strC[i]

}


let rev=strC.split('').reverse().join('');
console.log(rev);

/*

3️⃣ Find Largest Number in Array
let arr = [4,7,2,9,1];

Expected Output

9

*/
let arrF = [4,7,2,9,1];


let maxF=arrF[0];

for(let i=0;i<arrF.length;i++){
    if(arrF[i]>maxF){
        maxF=arrF[i]
    }
}
console.log(maxF);

/*
4️⃣ Count Even Numbers
let arr = [2,5,8,3,6];

Expected Output

3

(Even numbers: 2,8,6)
*/

let arrEv = [2,5,8,3,6];
let countN=0;

for(let i=0;i<=arrEv.length;i++){
    if(arrEv[i]%2==0){
        countN++
    }
}

console.log(countN);


/*
5️⃣ Reverse an Array
let arr = [1,2,3,4];

Expected Output

[4,3,2,1]

*/
let arrRe = [1,2,3,4];
let outR=[];

for(let i=arrRe.length-1;i>=0;i--){
    outR[outR.length] = arrRe[i]
}
console.log(outR);


/*

6️⃣ Sort Array Using Loop (without sort())
let arr = [5,3,8,1];

Expected Output

[1,3,5,8]

*/
let arrSo = [5,3,8,1];

for(let i=0;i<arrSo.length;i++){
    for(let k=i+1;k<arrSo.length;k++){
        if(arrSo[i]>arrSo[k]){
            let tem=arrSo[i];
            arrSo[i]=arrSo[k];
            arrSo[k]=tem
        }
    }
}
console.log(arrSo);


/*
7️⃣ Find Second Largest Number
let arr = [10,5,8,20,15];

Expected Output

15
*/
let arrLs = [10,5,8,20,15];

let maxS=arrLs[0];
for(let i=arrLs.length-2;i>=0;i--){
    if(arrLs[i]>maxS){
          maxS=arrLs[i]
    }
}

console.log(maxS);






/*
8️⃣ Remove Duplicates from Array
let arr = [1,2,2,3,4,4];

Expected Output

[1,2,3,4]

*/
let arrD = [1,2,2,3,4,4];

for(let i=0;i<arrD.length;i++){
    for(let k=i+1;k<arrD.length;k++){
        if(arrD[i]==arrD[k]){
            continue;
        }
    }
}
console.log(arrD);

/*

9️⃣ Check Palindrome
let str = "madam";

Expected Output

true

Example palindrome:
madam, level
*/
let strP="madam";
let reP=strP.split('').reverse().join('');

if(strP===reP){
     return true
}
else{
    return false
}

 let strp1="level";
 let reP1=strp1.split('').reverse().join('');
 if(strp1==reP1){
    return true
 }
 else{
    return false
 }
/*


🔟 Anagram Check (Very Famous)
let str1 = "listen";
let str2 = "silent";

Expected Output

true*/

let str1 = "listen";
let str2 = "silent";



/*1️⃣ Reverse a String (Loop use panni)
let str = "javascript";

Expected Output

tpircsavaj

👉 split() use panna koodathu. Loop use pannunga.

2️⃣ Fibonacci Series
n = 6

Expected Output

0 1 1 2 3 5

👉 Logic important question.

3️⃣ Prime Number Check
let num = 7;

Expected Output

Prime

Example
2,3,5,7,11 → Prime numbers

4️⃣ Find Largest Number
let arr = [12,45,7,23,56];

Expected Output

56
5️⃣ Find Second Largest Number
let arr = [10,20,5,8,25];

Expected Output

20
6️⃣ Remove Duplicates
let arr = [1,2,2,3,4,4,5];

Expected Output

[1,2,3,4,5]
7️⃣ Count Vowels in String
let str = "hello world";

Expected Output

3

(vowels: e,o,o)

8️⃣ Sum of Array Elements
let arr = [2,4,6,8];

Expected Output

20
9️⃣ Check Palindrome
let str = "level";

Expected Output

true
🔟 Anagram Check
let str1 = "listen";
let str2 = "silent";

Expected Output

true*/