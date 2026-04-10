/* // smallest:-
�
�
Basic Logic (1–10) 
1. Move all zeros to the end of an array */
function movezeroend(num){
        let j = 0;
    for(let i = 0; i < num.length; i++){
    if(num[i] !== 0){
        // swap
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
        
        j++;
    }   
}
return num
}
console.log(movezeroend([1,2,0,5,0,22,0,4,0,70]));



// 2. Find the second largest number in an array 

function secondlargest(arr){
    for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
        // newarr[newarr.length]=arr[i]
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        }
    }
    }
    return arr[arr.length-2]
}
console.log(secondlargest([3,4,5,1,2,8,9]))

// 3. Find the smallest number in an array 
function smallest(arr){
    let min=arr[3];

    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
     return min
 }
 console.log(smallest([2,45,2,4,12,452]));
// 4. Reverse an array (without .reverse()) 

function reverseNum(arr){
    let reverse=[]

for(let i=arr.length-1;i>=0;i--){
    reverse[reverse.length]=arr[i]

}
return reverse

}
console.log(reverseNum([1,2,3,4,5,6]));


// 5. Count even and odd numbers in an array 

function evenOdd(num){
    let even=0;
    let odd=0;
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            even++
        }
        else{
            odd++
        }
    }
    return [even,odd]

}
console.log(evenOdd([1,2,3,4,5,6,7,8,9,10]));

// 6. Find the sum of all elements in an array 

function sum(num){
    let total=0;
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }
    return total;

}
console.log(sum([1,2,3,4,5]));

// 7. Check if a number is prime 

function prime(num){
    if(num <= 1) return false

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(prime(23))


// 8. Find factorial of a number

function factorial(n){

    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact

}
console.log(factorial(3));



// 9. Swap two variables without a third variable 

let a=10;
let b=20;

 a = a+b
 b=a-b
 a=a-b
 console.log(a,b)


// [a,b]=[b,a];
// console.log(a,b);
// 10. Check if a number is palindrome 

function palindrome(num){

    let n=String(num);
    console.log(typeof n ,n);

    let rev='';

    for(let i=n.length-1;i>=0;i--){
        rev+=n[i];
    }
    if(num==rev){
        return "palindrome"
    }
    else{
        return "not palindrome"
    }
}
console.log(palindrome(121));

/*
�
�
Array Logic (11–20) */

//11. Remove duplicates from an array (no Set) 

function removeDuplicate(num){
    let result=[];
    for(let i=0;i<num.length;i++){
         if(!result.includes(num[i])){
            result[result.length]=num[i]
         }
    }
    return result
}
console.log(removeDuplicate([1,2,1,5,6,3,]));

//12. Find frequency of each element in an array :-

function frequency(num){
let ob={};

for(let i=0;i<num.length;i++){
    if(ob[num[i]]){
        ob[num[i]]++
    }
    else{
        ob[num[i]]=1
    }
     
}
return ob
}
console.log(frequency([1,2,3,1,2,5,4,5]));


//13. Find the missing number in a sequence 
function missing(num){
    let n=num.length+1
    let total= n*(n+1)/2;
    let sum=0
    for(let i=0;i<num.length;i++){
        sum+=num[i]

    }
    return total-sum
}
console.log(missing([1,3,4,5]));
// console.log();


//14. Find the intersection of two arrays 

function intersection(a,b){
    let arr=[];
    for(let i=0;i<a.length;i++){
        for(let k=0;k<b.length;k++){
            if(a[i]==b[k]){
                arr[arr.length]=a[i]
            }
        }
    }
    return arr
}
console.log(intersection([1,2,5,3,6],[6,1,7,2]));

//15. Find the union of two arrays (no duplicates) 

function union(a,b){
    let result=[];
    for(let i=0;i<a.length;i++){
        if(!result.includes(a[i])){
            result[result.length]=a[i]
        }
    }

    for(let i=0;i<b.length;i++){
        if(!result.includes(b[i])){
            result[result.length]=b[i]
        }
    }
    return result
}
console.log(union([1,2,3,4,5],[3,4,5,6,7,8,9,10]));

//16. Rotate array left by one position

function rotate(num){

    let left=num.shift();

    num.push(left)

return num
}

console.log(rotate([1,2,3,4]));


//17. Rotate array right by one position 

function rotateRight(n){
    let num=n.pop();
    n.unshift(num)
    
return n

}
console.log(rotateRight([1,2,3,4]));



/*18. Find the largest difference between two elements */
function maxDiff(arr){
    let min = arr[0];
    let maxDiff = 0;

    for(let i=1;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        } else {
            let diff = arr[i] - min;
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
    }

    return maxDiff;
}
//19. Sort an array without using .sort() (Bubble Sort) 

function bubble(num){

}
console.log(bubble());

/*20. Merge two sorted arrays 
�
�
String Logic (21–25) */

//21. Reverse a string without .split().reverse()

function reverseName(name){
    let rev='';
    for(let i=name.length-1;i>=0;i--){
        rev+=name[i];
    }
    return rev
}
console.log(reverseName("ganga"));

//22. Check if a string is palindrome 

function palin(str){
   

 

}




// 23. Count vowels and consonants in a string 
// 24. Find the first non-repeating character 
// 25. Remove duplicate characters from a string 
// �
// �
// Advanced Logic (26–30) 
// 26. Find the second smallest number in an array 
// 27. Find all pairs with given sum 
// 28. Find the longest word in a string 
// 29. Check if two strings are anagrams (no sorting method) 
// 30. Flatten a nested array (without .flat()) 
// �
// �
// Tips for solving: 
// ● Use for loops instead of inbuilt methods 
// ● Use objects for frequency counting 
// ● Practice dry run step-by-step 
// ● Focus on time complexity (O(n), O(n²))