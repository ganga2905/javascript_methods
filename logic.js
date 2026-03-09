/*// // Problem:
// /*Given two words beginWord and endWord, and a dictionary wordList,
//  return all shortest transformation sequences from beginWord to endWord, 
//  where only one letter can change at a time and each intermediate word must exist in wordList.*/



  let arr1 = [[1,2,3,4,5],[6,7,8]]
  let newarr =[]
  
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
      newarr[newarr.length]=arr1[i][j]
    }

  }
  console.log(newarr);
   
 //1. Reverse a Number
 
let a=[50,40,30,20,10];

let b=[];

b=a.reverse();
console.log(b);
for(let i=a.length-1;i>=0;i--){
    b[b.length]=a[i]

}
console.log(b);

// Palindrome Number :-
let c = [1,0,1];
let d=[];
for(let i=c.length-1;i>=0;i--){
  d[d.length]=c[i]

}
if(c==d){
  console.log("palintrome");
  
}


// factrioal number:-
let fac=6;

let result=1;
for(let i=2;i<=fac;i++){
  result=result*i
}
console.log(result);


    
//1. Reverse a Number 


let a1=[10,20,30,40,50];


 let a2=[];

for(let i=a1.length-1;i>=0;i--){
   a2[a2.length]=a1[i]

 }
console.log("reverse number",a2);
//2. Palindrome Number 

let a3=2002;

let a4=a3.toString();
a4.split("").reverse().join("");
if(a3==a4){
  console.log("palindrome");
}
else{
  console.log("not a palindrome");
  
}


 
/*3. Fibonacci Series 

 
4. Factorial of Number 
{ 
 fact = 1 
 for i = 1 to n 
  fact = fact * i 
} 
 
5. Prime Number 
{ 
 flag = true 
 for i = 2 to n-1 
 { 
  if n % i == 0 
   flag = false 
 } 
 if flag == true 
  print "Prime" 
} 
 
6. Sum of Digits 
{ 
 sum = 0 
 while n > 0 
 { 
  digit = n % 10 
  sum = sum + digit 
  n = n / 10 
 } 
} 
 
7. Count Digits 
{ 
 count = 0 
 while n > 0 
 { 
  n = n / 10 
  count++ 
 } 
} 
 
8. Armstrong Number 
{ 
 sum = 0 
 temp = n 
 while temp > 0 
 { 
  digit = temp % 10 
  sum = sum + digit^3 
  temp = temp / 10 
 } 
 if sum == n 
  print "Armstrong" 
} 
 
9. Perfect Number 
{ 
 sum = 0 
 for i = 1 to n-1 
 { 
  if n % i == 0 
   sum = sum + i 
 } 
 if sum == n 
  print "Perfect" 
} 
 
10. Reverse a String 
{ 
 i = 0 
 j = length - 1 
 while i < j 
 { 
  swap s[i] and s[j] 
  i++ 
  j-- 
 } 
} 
 
11. Palindrome String 
{ 
 if string == reverse(string) 
  print "Palindrome" 
} 
 
12. Largest Element in Array 
{ 
 max = a[0] 
 for i = 1 to n-1 
 { 
  if a[i] > max 
   max = a[i] 
 } 
} 
 
13. Smallest Element in Array 
{ 
 min = a[0] 
 for i = 1 to n-1 
 { 
  if a[i] < min 
   min = a[i] 
 } 
} 
 
14. Sum of Array 
{ 
 sum = 0 
 for i = 0 to n-1 
  sum = sum + a[i] 
} 
 
15. Linear Search 
{ 
 for i = 0 to n-1 
 { 
  if a[i] == key 
   print "Found" 
 } 
} 
 
16. Binary Search 
{ 
 low = 0 
 high = n-1 
 while low <= high 
 { 
  mid = (low + high) / 2 
  if a[mid] == key 
   print "Found" 
  else if a[mid] < key 
   low = mid + 1 
  else 
   high = mid - 1 
 } 
} 
 
17. Bubble Sort 
{ 
 for i = 0 to n-1 
 { 
  for j = 0 to n-i-2 
  { 
   if a[j] > a[j+1] 
    swap a[j] and a[j+1] 
  } 
 } 
} 
 
18. Count Even Numbers 
{ 
 count = 0 
 for i = 0 to n-1 
 { 
  if a[i] % 2 == 0 
   count++ 
 } 
} 
 
19. Count Odd Numbers 
{ 
 count = 0 
 for i = 0 to n-1 
 { 
  if a[i] % 2 != 0 
   count++ 
 } 
} 
 
20. Second Largest Element 
{ 
 largest = -∞ 
 second = -∞ 
 for i = 0 to n-1 
 { 
  if a[i] > largest 
  { 
   second = largest 
   largest = a[i] 
  } 
  else if a[i] > second and a[i] != largest 
   second = a[i] 
 } 
} 
 
21. Swap Two Numbers 
{ 
 temp = a 
 a = b 
 b = temp 
} 
 
22. Swap Without Temp 
{ 
 a = a + b 
 b = a - b 
 a = a - b 
} 
 
23. Count Vowels 
{ 
 count = 0 
 for each character c in string 
 { 
  if c is vowel 
   count++ 
 } 
} 
 
24. Remove Spaces from String 
{ 
 newString = "" 
 for each character c in string 
 { 
  if c != space 
   newString = newString + c 
 } 
} 
 
25. Find Duplicate in Array 
{ 
 for i = 0 to n-1 
 { 
  for j = i+1 to n-1 
  { 
   if a[i] == a[j] 
    print a[i] 
  } 
 } 
} 
 
26. Count Frequency 
{ 
 for i = 0 to n-1 
 { 
  count = 1 
  for j = i+1 to n-1 
  { 
   if a[i] == a[j] 
    count++ 
  } 
 } 
} 
 
27. Check Leap Year 
{ 
 if year % 4 == 0 
  print "Leap Year" 
} 
 
28. GCD of Two Numbers 
{ 
 while b != 0 
 { 
  temp = b 
  b = a % b 
  a = temp 
 } 
} 
 
29. LCM of Two Numbers 
{ 
 lcm = (a * b) / gcd(a, b) 
} 
 
30. Print Star Pattern 
{ 
 for i = 1 to n 
 { 
  for j = 1 to i 
   print "*" 
 } 
} 
 
31. Reverse Array 
{ 
 i = 0 
 j = n-1 
 while i < j 
 { 
  swap a[i] and a[j] 
  i++ 
  j-- 
 } 
} 
 
32. Merge Two Arrays 
{ 
 for i = 0 to n1-1 
  c[i] = a[i] 
 for j = 0 to n2-1 
  c[n1+j] = b[j] 
} 
 
33. Check Anagram 
{ 
 sort s1 
 sort s2 
 if s1 == s2 
  print "Anagram" 
} 
 
34. Count Words 
{ 
 count = 1 
 for each character c in string 
 { 
  if c == space 
   count++ 
 } 
} 
 
35. ASCII Value 
{ 
 print ascii(character) 
} 
 
36. Power of Number 
{ 
 result = 1 
 for i = 1 to power 
  result = result * base 
} 
 
 
37. Check Even or Odd 
{ 
} 
if n % 2 == 0 
print "Even" 
else 
print "Odd" 
38. Print Natural Numbers 
{ 
} 
for i = 1 to n 
print i 
39. Sum of Natural Numbers 
{ 
} 
sum = n * (n + 1) / 2 
40. Check Positive or Negative 
{ 
} 
if n > 0 
print "Positive" 
else 
print "Negative" 
41. Convert Celsius to Fahrenheit 
{ 
} 
f = (c * 9 / 5) + 32 
42. Convert Fahrenheit to Celsius 
{ 
} 
c = (f - 32) * 5 / 9 
43. Count Characters 
{ 
count = 0 
for each character c in string 
  count++ 
} 
 
44. Find Missing Number 
{ 
 sum1 = n * (n + 1) / 2 
 sum2 = sum of array 
 missing = sum1 - sum2 
} 
 
45. Check Sorted Array 
{ 
 flag = true 
 for i = 0 to n-2 
 { 
  if a[i] > a[i+1] 
   flag = false 
 } 
} 
 
46. Find Index of Element 
{ 
 for i = 0 to n-1 
 { 
  if a[i] == key 
   print i 
 } 
} 
 
47. Remove Duplicate Elements 
{ 
 for i = 0 to n-1 
 { 
  for j = i+1 to n-1 
  { 
   if a[i] == a[j] 
    delete a[j] 
  } 
 } 
} 
 
48. Print Multiplication Table 
{ 
 for i = 1 to 10 
  print n * i 
} 
49. Count Consonants 
{ 
} 
count = 0 
for each character c in string 
{ 
if c is consonant 
count++ 
} 
50. Find Average of Numbers 
{ 
} 
sum = 0 
for i = 0 to n-1 
sum = sum + a[i] 
avg = sum / n 
Connect & Share:   
Tag us on your success stories:   
• Instagram: @code.abhii07   
• YouTube: SYNTAX ERROR   */



// movr to zero:-

// function movetozero(num){

//   for(let i=0;i<num.length;i++){
//             for(let k=num.length-1;k>i;k--){
//                 if(num[i]===0){
//                   if(num[k]!==0){
//                     let temp;

//                     temp=num[k]
//                     num[k]=num[i]
//                     num[i]=temp

//                   }
               
//        }
//         }
//            return temp
//   }
  
// }
// console.log(movetozero([2,3,0,5,0,7,0]));

// fine the index f 2 




// let num1=[4,5,6,20,2];

// let target=10;

// for(let i=0;i<num1.length;i++){
//     for(let j=i+1;j<num1.length;j++){
//       if(num1[i]+num1[j]==target){
//         console.log(i,j);
        

//       }
//     }
// }

// let num2=[1,3,5,0,4,0];



// let name="ganga";
// let result=''

// for(let i=name.length-1;i>=0;i--){
//   result+=name[i]
// }
// console.log(result);


// let word="javascript is easy";

// let word1=word.split(" ");
// console.log(word1.reverse().join(' '));


// let result1=[];

// for(let i=word.length-1;i>=0;i++){
//     result1[result1.length]=word[i]

// }








