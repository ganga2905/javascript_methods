// 🟢 EASY LEVEL (Must Know Basics)
// 🔹 Arrays

// Find largest number in array


let large=[10,20,48,456,20,5,10,5,40,256,8,3598];

let max=large[0];

for(let i=0;i<large.length;i++){
    if(large[i]>max){
        max=large[i]
    }
}
console.log(max);



// Find smallest number

let mini=large[0];
for(let i=0;i<large.length;i++){
    if(large[i]<mini){
        mini=large[i]
    }
}
console.log(mini);


// Find sum of all elements

let total=0;

for(let i=0;i<large.length;i++){
    total+=large[i]
}
console.log(total);

// Reverse an array (without reverse())

let reverse=[];
for(let i=large.length-1;i>=0;i--){
    reverse[reverse.length]=large[i]
}
console.log(reverse);


// Find second largest number
//   let large=[10,20,48,456,40,256,8,3598]; 

for(let i=0;i<large.length;i++){
    for(let j=i+1;j<large.length;j++){
        if(large[i]>large[j]){
            let temp=large[i];
            large[i]=large[j];
            large[j]=temp

        }
    }
}
console.log(large[large.length-2]);


// Remove duplicates from array

let large1=[10,20,48,456,20,5,10,5,40,256,8,3598];
let result=[];


for(let i=0;i<large1.length;i++){
    if(!result.includes(large1[i])){
        result[result.length]=large1[i]
    }
}

console.log(result);


// Count even & odd numbers
let even=0;
let odd=0
for(let i=0;i<large.length;i++){
    if(large[i]%2===0){
        even++
    }
    else{
        odd++
    }
}
console.log(even);
console.log(odd);



// Find missing number (1 to n)





// Sort array without sort()

for(let i=0;i<large.length;i++){
    for(let j=i+1;j<large.length;j++){
        if(large[i]>large[j]){
            let temp=large[i];
            large[i]=large[j];
            large[j]=temp
        }
    }
}
console.log(large);


// Merge two arrays

let a=[10,20,30,40,50,70,50];

let b=[80];
let c=[]

for(let i=0;i<a.length;i++){
    c[c.length]=a[i]
}
for(let i=0;i<b.length;b++){
    c[c.length]=b
}
console.log(c);


// 🔹 Strings

// Reverse a string (without reverse())


let name="ganga";


let rev='';

for(let i=name.length-1;i>=0;i--){
    rev+=name[i];
    
}
console.log(rev);

*/

//Check palindrome:-

let palin="madam";

let check='';

for(let i=palin.length-1;i>=0;i--){
    check+=palin[i];
}
if(palin==check){
    return console.log("true");
    
}
else{
    return console.log("false")
}


/*
Count vowels & consonants

Count characters frequency

Remove spaces

Convert first letter to uppercase

Find longest word in string

Check anagram

Count words in sentence

Remove duplicate characters

🟡 MEDIUM LEVEL (Interview Favorite 🔥)
🔹 Arrays

Move all zeros to end
👉 [0,1,0,3,12] → [1,3,12,0,0]

Find intersection of two arrays
👉 [1,2,3] & [2,3,4] → [2,3]

Find union of arrays

Rotate array (left/right)
👉 [1,2,3,4] → [3,4,1,2]

Find subarray with given sum

Kadane’s Algorithm (max subarray sum) ⭐

Flatten nested array
👉 [[1,2],[3,4]] → [1,2,3,4]

Find duplicates in array

🔹 Strings

Longest substring without repeating characters ⭐

First non-repeating character

Check if one string is rotation of another

String compression
👉 "aaabb" → a3b2

Remove all duplicates in string

Count substring occurrences

Check valid parentheses ⭐

🔴 IMPORTANT DSA PATTERN QUESTIONS (Very Important 🔥🔥)
🔹 Sliding Window

Max sum of subarray of size k

Longest substring without repeating

🔹 Two Pointer

Reverse array

Pair with given sum

🔹 HashMap / Object

Frequency count

First unique character

🔹 Recursion

Reverse string

Flatten array (deep)

💻 Sample Interview Question + Code
Reverse String (without method)
let str = "hello";
let rev = "";

for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
}

console.log(rev);
Palindrome Check
let str = "madam";
let rev = "";

for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
}

console.log(str === rev);
Move Zeros to End
let arr = [0,1,0,3,12];
let result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        result[result.length] = arr[i];
    }
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        result[result.length] = 0;
    }
}

console.log(result);

*/