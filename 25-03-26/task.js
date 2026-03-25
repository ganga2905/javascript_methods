/*🔥 Loop Coding Questions (ONLY QUESTIONS)
🔹 Basic Loop*/
//Print numbers from 1 to 50

for(let i=1;i<=50;i++){
    console.log(i);
    
}

//Print numbers from 50 to 1 (reverse)
for(let i=50;i>=1;i--){
    console.log(i);
    
}

//Print all even numbers between 1–100
for(let i=1;i<=100;i++){
    if(i %2 == 0){
        console.log(`even number ${i}`);
        
    }
}

//Print all odd numbers between 1–100
for(let i=1;i<=100;i++){
    if(i%2!==0){
        console.log(`odd num ${i}`);
        
    }
}

//Find sum of numbers from 1 to N
let sum=0
for(let i=1;i<=10;i++){
    sum+=i

}
console.log(sum);



//🔹 Number Based
//Count digits in a number
/*Reverse a number
Check if a number is palindrome
Find sum of digits of a number
Find product of digits*/
// 🔹 Logic Based
// Check if a number is prime
// Print all prime numbers between 1–100

//Print Fibonacci series up to N terms

let fibonacci=1;

for(let i=1;i<=7;i++){
    fibonacci=fibonacci*i
}
console.log(fibonacci);


//Find largest number in an array using loop

let number=[10,50,30,20.235,4878];

let max=number[0];

for(let i=0;i<number.length;i++){
    if(number[i]>max){
        max=number[i]
    }
}
console.log(max);

//Find smallest number in an array using loop
let mini=number[0];
for(let i=0;i<number.length;i++){
    if(number[i]<mini){
        mini=number[i]
    }
}
console.log(mini);


//🔹 Array + Loop
//Count even numbers in array

let num=[1,54,45,338,46461,45,20,24,24,24];

let count=0;

for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        count++
    }
}
console.log(count);


//Count odd numbers in array

let countOdd=0;
for(let i=0;i<num.length;i++){
    if(num[i]%2!==0){
        countOdd++
    }
}
console.log(countOdd);

//Find sum of array elements

let total=0;
for(let i=0;i<num.length;i++){
    total+=num[i]
}
console.log(total);

//Reverse an array (without using reverse method)

let rev=[];
 for(let i=num.length-1;i>=0;i--){
    rev[rev.length]=num[i]
 }
 console.log(rev);
 
//Remove duplicates from array using loop

let remove=[];

for(let i=0;i<num.length;i++){
    if(!remove.includes(num[i])){
        remove[remove.length]=num[i]
    }
}
console.log(remove);



//🔹 Pattern Problems ⭐
// *
// **
// ***
// ****
// ****
// ***
// **
// *

let out=''

for(let i=0;i<4;i++){

    let n=i
    for(let j=0;j<=i;j++){
        out+='*'

      
    }
    out+='\n'
}
console.log(out);



/*
1
12
123
1234
1234
123
12
1*/
//*
// ***
// *****
// *******

let start='';

for(let i=0;i<4;i++){
    if(i%2!==0){

    }
}


/*
🔹 Advanced Loop
Print multiplication table (any number)
Print all factors of a number
Check if number is Armstrong number
Swap two numbers without using third variable
Find second largest number in array*/