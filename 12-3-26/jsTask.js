// . Write a function to find the second largest
//  number in an array without using 
// built-in methods.

function largest(arr){
    for(let i=0;i<arr.length;i++){
        for(let k=i+1;k<arr.length;k++){
            if(arr[i]>arr[k]){
                let tem=arr[i];
                arr[i]=arr[k];
                arr[k]=tem
                 
            }
        }
    }
    return arr[arr.length-2];

}
console.log(largest([10,50,60,70,45]));




// 2. Explain the difference between
//  null and undefined in JavaScript with examples.
// 3. Write a function to check whether a string is a palindrome. 

function palindrome(str){
    let rev=str.split("").reverse().join('');
    if(str===rev){
        return true
    }
    else{
        return false
    }
}
console.log(palindrome("madam"));

function palindrome1(name){
    let rev='';
    for(let i=name.length-1;i>=0;i--){
        rev+=name[i]
    }
    return name===rev
}
console.log(palindrome1("ganga"));




// 4. What is hoisting in JavaScript? Explain with an example. 

// 5. Write a function to count how many times each character appears in a string. 
// Example: "hello" → {h:1, e:1, l:2, o:1} 


function  character(word){
    

}