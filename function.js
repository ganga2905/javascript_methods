/*//1. Even or Odd Function 
//Create a function that takes a number and prints whether it’s even or odd. 


// function evenOrOdd(num){

//     if(num%2==0){
//         console.log(`even num : ${num}`);
//     }
//     else{
//         console.log(`odd num :${num}`);
        
//     }

// }


// evenOrOdd(10)

function evenOrOdd(num){
    let msg;
    if(num%2==0){
        msg="Even num"
    }
    else{
        msg="odd number"
    }
    return msg

}
  console.log(evenOrOdd(10));

  //2. Sum of 1 to N 
//Create a function that takes a number n and uses a loop to find the sum of numbers from 1 to n.


function sum(num){
    let total=0
    for(let i=0;i<=num;i++){
        total+=i

    }
    return total;

}
console.log(sum(2));
//3. Factorial Function 
// Write a function that returns the factorial of a number using a for loop. 

function factorial(num){

    let result=1;
    
    for(let i=0;i<=num;i++){
        result=result*i

    }
    return result
}
console.log(factorial(5));




// 4. Array Sum Function 
// Write a function that accepts an array and returns the sum of all numbers. 

function arrayNum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
            sum+=numbers[i]
    }
    return sum


}
console.log(arrayNum([1,2,3,4,5,6]));


// 5. Largest of Three Numbers 
// Write a function that uses if-else to find the largest among 3 numbers.

function largest(){

}

//6. Count Even Numbers 
// Create a function that takes an array and returns how many numbers are even. 
function even(num){  
   let count=0;
   for(let i=0;i<num.length;i++){
          if(num[i]%2==0){
        count++
    }
   }
 
    return count;
}
console.log(even([1,2,4,50,40,30,20,54,42]));

*/
// 7. Reverse String Function 
// Write a function that takes a string and returns its reverse using a loop. 

function reverse(name){
    let result='';
    for(let i=name.length-1;i>=0;i--){
        result+=name[i]
    }
    return result;
}
console.log(reverse("ganga"));


// 8. Multiplication Table Function 
// Create a function that prints the multiplication table of any number given as 
// argument. 


function multiTable(num){
    let result='';
    for(let i=1;i<=10;i++){
        result+=`${i}x${num}=${i*num}\n`
    }
    return result;
}
console.log(multiTable(4));


/*
// 10. Marks Result Function 
// Write a function that takes a student’s mark and prints "Pass" if ≥35, otherwise 
// "Fail". 

function result(mark){
    let ans;
    if(mark>=35){
        ans="pass"
    }
    else{
        ans="fail"
    }
    return ans

}
console.log(result(15));


//11. Sum of Odd Numbers 
//Create a function that uses a loop to find the sum of all odd numbers from 1 to 20. 

// function odd(n){
//     let sum;
//     for(let i=0;i<=n;i++){
//         if(i%2){
//             sum+=i
//         }
//     }
//     return sum
// }
//   console.log(odd(2));

// 13. Array Average Function 
// Write a function that calculates the average of numbers in an array. 

function average(num){
    let total=0;
    for(let i=0;i<num.length;i++){
        total+=num[i]
    }
    let length=num.length
    let res=total/length

    return res;
    

}
let output=average([1,2,3,5,50]);
console.log(output);


// 14. Pattern Printing 
// Write a function that prints this pattern using a loop:

function pattern(){
    for(let i=0;i<=4;i++){
        for(let j=1;j<=i+1;j++){
            console.log('*');
            
        }
    }
}
console.log(pattern());
 
*/