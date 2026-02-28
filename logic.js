/*// // Problem:
// /*Given two words beginWord and endWord, and a dictionary wordList,
//  return all shortest transformation sequences from beginWord to endWord, 
//  where only one letter can change at a time and each intermediate word must exist in wordList.*/



// //  let arr=[1,2,[3,4],5];


// //  let output=[];

// //  for(let i=0;i<arr.length;i++){
// //     if(arr.length===3){
// //         output[output.length]=arr[2][0][1]
// //     }
// //     output[output.length]=arr[i]
// //  }
// //  console.log(output);


//   let arr1 = [[1,2,3,4,5],[6,7,8]]
//   let newarr =[]
  
//  for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr1[i].length;j++){
//         // newarr +=arr1[j][i]
//         newarr[newarr.length]=arr1[j][i]
//     }

//  }
//  console.log(newarr)

 
 //1. Reverse a Number
 /*Given a number, reverse it.
Example: 1234 → 4321*/

// let n = 1234;
// let rev = 0;

// while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
// }

// console.log("Reversed Number:", rev);

/*var twoSum = function(nums, target) {
    let num=0

    for(let i=0;i<nums.length;i++){
        if(num===target){
            break;
        }
        num+=nums[i]        

    }
    return num
     
};
console.log(twoSum([2,7,11,15],9))*/


// reverese number:-

let a=[50,40,30,20,10];

let b=[];

// b=a.reverse();
// console.log(b);
for(let i=a.length-1;i>=0;i--){
    b[b.length]=a[i]

}
console.log(b);

// Palindrome Number :-
let c = [1,0,1];
let isPalindrome = true;

for(let i = 0; i < c.length/2; i++){
    if(c[i] !== c[c.length - 1 - i]){
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "palindrome" : "not palindrome");
// let c=[1,0,1];

// let d=[];

// for(let i=0;i<c.length;i++){
//     d[d.length]=c[i];
// }
// console.log(d);

//  if(c===d){
//         console.log("palindrome");
        
//     }
//     else {
//         console.log("not palindrome");
        
//     }


let e=5; //Factorial of Number 

let f=1;
for(let i=1;i<=e;i++){
    f=f*i
}
console.log(f);


