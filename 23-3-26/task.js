/*🚀 🔥 MUST-DO Programming Interview Questions
🟢 BASIC LEVEL (Start here)*/

// 1. Reverse a String

let name="ganga";
let str='';

for(let i=name.length-1;i>=0;i--){
    str+=name[i]

}
console.log(str);


// 👉 Input: "ganga" → Output: "agnag"

// 👉 Idea:



// loop / split + reverse
// 2. Palindrome Check

// 👉 "madam" → true
// 👉 "hello" → false

// 👉 Idea:

// reverse compare


let palin="madam"
let result=''

for(let i=palin.length-1;i>=0;i--){
    result+=palin[i]

}
let palin1="hello"
let result1=''

for(let i=palin1.length-1;i>=0;i--){
    result1+=palin1[i]

}
console.log(palin===result);
console.log(palin1===result1);


function palinS(give){
    let str="";
    for(let i=give.length-1;i>=0;i--){
        str+=give[i]
    }
    return str===give

}
console.log(palinS("madam"));
console.log(palinS("hello"));



// 3. Count Vowels

// 👉 "ganga" → 2

// 👉 Idea:

// loop + check a,e,i,o,u

let vow="ganga";

let check=["a","e","i","o","u"];
let count=0

for(let i=0;i<vow.length;i++){
    for(let j=0;j<check.length;j++){
        if(vow[i]==check[j]){
            count++
        }
    }
}
console.log(count);






// 4. Factorial

// 👉 5 → 120

// 👉 Idea:

// loop multiply

let fact=5;

let multi=1;


for(let i=1;i<=fact;i++){
    multi=multi*i
}

console.log(multi);



// 5. FizzBuzz 🔥 (VERY IMPORTANT)

// 👉 1–100 print

// 3 → Fizz
// 5 → Buzz
// both → FizzBuzz



for(let i=1;i<100;i++){
    if(i%3==0&&i%5==0){
        console.log("FizzBuzz");
        
    }
    else if(i%2){

    }
}

// 🟡 INTERMEDIATE LEVEL
// 6. Remove Duplicates (Array)

// 👉 [1,2,2,3] → [1,2,3]

// 👉 Idea:

// Set()

let arr=[1,2,2,3];
let out=[]

for(let i=0;i<arr.length;i++){
    if(!out.includes(arr[i])){
        out[out.length]=arr[i]
    }

}
console.log(out);


let remove=[...new Set(arr)];

console.log(remove);


// 7. Find Max Number

// 👉 [10,50,20] → 50

// 👉 Idea:

// loop compare

let arrM=[10,50,20];

let max=arrM[0];
for(let i=0;i<arrM.length;i++){
    if(arrM[i]>max){
        max=arrM[i]
    }
}
console.log(max);


// 8. Anagram Check

// 👉 "listen" & "silent"

// 👉 Idea:

// sort compare

let word1="listen";
let word2="silent";

let res=word1.split('').sort().join('');
let res1=word2.split('').sort().join('');
console.log(res===res1);



// 9. Character Frequency 🔥

// 👉 "ganga" → {g:2,a:2,n:1}

// 👉 Idea:

// object + loop


let char="ganga"

let countC={}

for(let i=0;i<char.length;i++){
    let freq=char[i]
    if(countC[freq]){
        countC[freq]++
    }
    else{
        countC[freq]=1
    }
}
console.log(countC);


// 10. Move Zeros to End 🔥🔥

// 👉 [0,1,0,3] → [1,3,0,0]

// 👉 Idea:

// two pointer (i, j)


let num=[0,1,0,3];

let j=0;

for(let i=0;i<num.length;i++){
    if(num[i]!==0){
        let tem=num[i];
        num[i]=num[j];
        num[j]=tem
        j++
    }
}
console.log(num);


/*
🔴 ADVANCED (Interview Select Questions)*/


// 11. Longest Word

// 👉 sentence → longest word find


let word="i am a self motivatetd and best for future life make ";


let spli=word.split('');
let fLength=spli[0]

for(let i=0;i<spli.length;i++){
    if(spli[i].length>fLength[i].length){
        fLength=spli[i]
    }
}
console.log(fLength);


// 12. Flatten Array

// 👉 [1,[2,3]] → [1,2,3]

let num1= [1,[2,3]];

let num2=[];

for(let i=0;i<num1.length;i++){
    for(let j=0;j<num1[i].length;j++){
        num2[num2.length]=num[j][i]

    }
}
console.log(num2);



// 13. Two Sum 🔥🔥

// 👉 [2,7,11,15], target=9
// 👉 Output: [2,7]

// 👉 Idea:

let n=[2,7,11,15];

let target=9;

for(let i=0;i<n.length;i++){
    for(let j=i+1;j<n.length;j++){
        if(n[i]+n[j]==target){
            console.log(n[i],n[j]);
            
        }
    }
}


