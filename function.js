//1. Even or Odd Function 
// Create a function that takes a number and prints whether it’s even or odd. 


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

// evel: Very Easy
// Write a function that prints numbers from 1 to n using for loop and if to print only even numbers.

function even(n){
    for(let i=0;i<n;i++){
        if(i%2==0){
          console.log(i);
        }

    }
}
even(10)





// Write a function that prints numbers from 1 to n using while loop and if to print only odd numbers.


function odd(n){
    let num=1;
    while(num<=n){
        if(num %2!==0){
            console.log(num);   
        }
        num++
    }
}
odd(5)



//Write a function that checks if a number is positive or negative using if else.


function postive(n){
    if(n>0){
        console.log(`postive number :${n}`);
    }
    else {
        console.log(`negative number :${n}`);
        
    }

}
postive(-10)

//Write a function that prints numbers from n to 1 using for loop and if to skip number 5.



function skip(n){
    for(let i=n;i>=0;i--){
        if(i===5){
            continue;            
        }
        console.log(i);
        
    }
}
skip(10)

//Write a function that prints all multiples of 3 from 1 to n using for loop and if.

function multi(n){
    for(let i=1;i<=n;i++){
        if(i%3==0){
            console.log("multi"+i);
            
        }
        
    }
}
multi(3)
/*
🟡 Level: Easy
Write a function that counts how many even numbers are in an array using for loop and if.
*/
function eventCount(num){
    let count=0;
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            count++
        }

    }
    return count
}
console.log(eventCount([10,2,40,45,62,35,78,98,120,12]));




//Write a function that counts how many odd numbers are in an array using while loop and if.

function oddNum(n){
    let count=0;
    let i=0;
    while(i<n.length){
        if(n[i]%2!==0){
            count++
        }
        i++;
    }
    return count
}
console.log(oddNum([10,21,35,65,87,45,21,20,10,33]));





//Write a function that prints only positive numbers from an array using for loop and if.

function postiveNum(n){

    for(let i=0;i<n.length;i++){
        if(n[i]>0){
            console.log(n[i]);
            
        }
    }
}
postiveNum([10,20,-21,-100,230,-60])

//Write a function that prints numbers from 1 to 50 using for loop and if to print only numbers divisible by 5.


 function  divisionFive(n){
    for(let i=1;i<=n;i++){
        if(i%5==0){
            console.log(i);
            
        }
    }
 }
 divisionFive(50)


//Write a function that checks if a number is divisible by 10 using if else.

function checkDivi(n){
    let ans='';
    if(n%10===0){
        ans='true'
    }
    else{
        ans='false'
    }
    return ans
}
console.log(checkDivi(10));
console.log(checkDivi(21));



/*🟠 Level: Medium (still beginner)
Write a function that finds the sum of even numbers from 1 to n using for loop and if.

*/

function sumEven(n){
    let total=0;
    for(let i=1;i<=n;i++){
        if(i%2==0){
            total+=i
        }
    }
    return total;
}
console.log(sumEven(8));




//Write a function that finds the sum of odd numbers from 1 to n using while loop and if.


function sumOdd(n){
    let total=0;
    let num=1;
    while(num<=n){
        if(num%2!==0){
            total+=num
        }
        num++
    }
    return total
}
console.log(sumOdd(10));



//Write a function that prints numbers from 1 to n using for loop and if to skip odd numbers.

function skipOdd(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            continue;
        }
        console.log(i);
        
    }
}
skipOdd(10)

//Write a function that prints all numbers greater than 10 from an array using for loop and if.


function greater(num){
    for(let i=0;i<num.length;i++){
        if(num[i]>10){
            console.log("greater"+num[i]);
            
        }
    }
}
greater([10,20,32,12,11,52,65,85,3,0]);

//Write a function that counts how many numbers are greater than 20 in an array using for loop and if.
 function greaterCount(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>20){
            count++
        }
    }
    return count;
 }
 console.log(greaterCount([10,20,24,52,12,32,21,200]));

/*
🟣 Level: Array + Condition + Loop
Write a function that prints only vowels from a string using for loop and if.
*/

function vowels(name){
    let vowel='aeiouAEIOU';
    for(let i=0;i<name.length;i++){
        for(let k=0;k<vowel.length;k++){
            if(name[i]===vowel[k]){
                console.log(name[i]);
                
            }
        }
    }

}
vowels("ganga");




//Write a function that counts how many vowels are in a string using for loop and if.






/*
Write a function that prints only capital letters from a string using for loop and if.

Write a function that prints only numbers from an array using for loop and if.

Write a function that checks if all numbers in an array are positive using for loop and if else.

🔵 Level: Slight Thinking
Write a function that finds the largest number in an array using for loop and if.

Write a function that finds the smallest number in an array using for loop and if.

Write a function that counts how many times 5 appears in an array using for loop and if.

Write a function that prints numbers from 1 to n using for loop and if to print only numbers divisible by both 2 and 3.

Write a function that checks whether a number is prime using for loop and if.

🟤 Real-Life Style Beginner Tasks
Write a function that prints "Pass" if marks are ≥ 40 else "Fail" using if else.

Write a function that prints "Child" if age < 18 else "Adult" using if else.

Write a function that counts how many students scored above 60 from an array using for loop and if.

Write a function that prints only long words (length > 5) from an array using for loop and if.

Write a function that checks if a number is a multiple of 7 using if else.*/