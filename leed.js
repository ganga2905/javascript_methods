/*Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/

let nums = [2,7,11,15];
let target = 9
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            console.log(i,j);
            
        }
    }
}

let nums1 = [3,2,4]
let target1=6;
for(let i=0;i<nums1.length;i++){
    for(let j=i+1;j<nums1.length;j++){
        if(nums1[i]+nums1[j]==target1){
            console.log(i,j);
            
        }
    }
}

let nums2 = [3,3]
let  target2 = 6

for(let i=0;i<nums2.length;i++){
    for(let j=i+1;j<nums2.length;j++){
        if(nums2[i]+nums2[j]==target2){
            console.log(i,j);
            

        }
    }
}

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

let x=121;

let str=x.toString();
 let reverse=str.split('').reverse().join('');
 if(str===reverse){
  console.log(true);
  
 }
 else{
      console.log(false);
 }






// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

let x1=-121;

let str1=x1.toString();

let reverse1=str1.split('').reverse().join('');
if(x1==reverse1){
    console.log(true);
    
}else{
    console.log(false);
    
}


// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.



let x2=10;

let str3=x2.toString();

let reverse3=str3.split('').reverse().join('');

if(str3==reverse3){
    console.log(true);
    
}
else{
    console.log(false);
    
}
