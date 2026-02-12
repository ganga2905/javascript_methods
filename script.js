// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.

let num=[1, 2, 4, 5];

num.splice(3,0,3);
console.log(num);

//2. Remove the third element from the array [10, 20, 30, 40, 50].


let num1=[10, 20, 30, 40, 50];

num1.splice(2,1);
console.log(num1);
// 3.Replace the second element in the array [5, 10, 15] with 20.

let num2=[5, 10, 15];
num2.splice(1,1,20);
console.log(num2);
//4. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].

let num3=[1, 2, 3, 4, 5];
num3.push(7,8);
console.log(num3);
//// 5.Insert the element 99 at the beginning of the array [10, 20, 30].

let num4=[10, 20, 30];
num4.unshift(99);
console.log(num4);
// 6.Remove the last element from the array [2, 4, 6, 8, 10].
let num5=[2, 4, 6, 8, 10];
num5.shift();
console.log(num5);

// 7.Replace all occurrences of 5 with 50 in the array [5, 10, 5, 20, 5].

let num6= [5, 10, 5, 20, 5];
let result=num6.map((e)=>e===5?50:e);
console.log(result);
//8 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.
let num7=[3, 6, 9, 12, 15];
num7.splice(2,0,0);
console.log(num7);
// 9.Remove all even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
let num8=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1=num8.filter((e)=>e%2);
console.log(result1);
// 10.Given the array [5, 10, 20, 30], insert 15 between 10 and 20.
 let num9= [5, 10, 20, 30];
 num9.splice(2,0,15);
 console.log(num9);
 // 11.Remove the element at index 3 from the array [100, 200, 300, 400, 500].
 let num10= [100, 200, 300, 400, 500];
 num10.splice(3,1);
 console.log(num10);
 //12. Replace the last element in the array [1, 2, 3, 4, 5] with 10.
 let num11=[1, 2, 3, 4, 5];
 num11.splice(4,1,10);
 console.log(num11);
 
 // 13.Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].

let num12=[1, 2, 3, 4, 5];
num12.unshift(8,9,10);
console.log(num12);
//14. Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].
let num13= [7, 14, 21, 7, 28];
num13.shift();
console.log(num13);

//15. Insert the elements 25 and 30 at the end of the array [10, 20].
let num14=[10, 20];
num14.push(25,30);
console.log(num14);
// 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].

let num15=[0, 1, 0, 1, 0];
let result2=num15.map(e=>e===0?1:e);
console.log(result2);

// 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.
let num16= [5, 10, 15, 20, 25];
num16.splice(2,0,12);
console.log(num16);

// 18.Remove the second-to-last element from the array [2, 4, 6, 8, 10].
let num17= [2, 4, 6, 8, 10];
num17.splice(num17.length-2,1);
console.log(num17);
// 19.Replace the element at index 1 in the array [3, 6, 9] with 12.
let num18=[3, 6, 9];
num18.splice(1,1,12);
console.log(num18);

//20. Add the elements 100 and 200 at the beginning of the array [300, 400, 500].

let num19=[300, 400, 500];
num19.unshift(100,200);
console.log(num19);

//21. Remove all occurrences of 42 from the array [42, 42, 42, 42, 42].
let num20= [42, 42, 42, 42, 42];
let result3=num20.filter((e)=>e!==42);
console.log(result3);

//// 22.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].

let num21=[1, 2, 3, 4, 5, 6];
num21.push(7);
console.log(num21);
//23. Replace the last occurrence of 8 with 80 in the array [8, 16, 24, 8, 32].

let num22=[8, 16, 24, 8, 32];

let index=num22.lastIndexOf(8);

if(index!==-1){
   num22.splice(index,1,80)
}
console.log(num22);
//24 Given the array [2, 4, 6, 8, 10], insert 5 between 4 and 6.

let num23=[2, 4, 6, 8, 10];
num23.splice(2,0,5);
console.log(num23);

//25. Remove all elements from the array [11, 22, 33, 44, 55].

let num24=[11, 22, 33, 44, 55];
num24.splice(0,num24.length)
console.log(num24);
// 26.Replace the first element in the array [7, 14, 21] with 10
let num25=[7, 14, 21] ;

num25.splice(0,0,10);
console.log(num25);

// 27.Add the elements 1 and 2 at the end of the array [3, 4, 5].
let num26=[3, 4, 5];
num26.push(1,2);
console.log(num26);


// 28.Remove the element at index 0 from the array [50, 40, 30, 20, 10].
let num27= [50, 40, 30, 20, 10];
num27.splice(0,1);
console.log(num27);


// 29.Replace all occurrences of 6 with 60 in the array [6, 12, 18, 6, 30].

let num28=[6, 12, 18, 6, 30];
let result4=num28.map((e)=>e===6?60:e);
console.log(result4);

// 30.Given the array [3, 6, 9, 12, 15], insert 7 at index 3.


let num29=[3, 6, 9, 12, 15];
num29.splice(3,0,7);
console.log(num29);
