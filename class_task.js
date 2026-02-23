// print the even number from array

let number=[1,2,3,4,5,6,7,8,9,10];

let output='';

for(let i=0;i<number.length;i++){
    if(number[i]%2===0){
        output+=number[i]
    }
}
console.log(output);

// how manu number in 6 countes the elemnet

let num=[30,6,7,6,5,6];

let count=0;
for(let i=0;i<num.length;i++){
    if(num[i]===6){
        count++
    }
}
console.log(count);

const number1=[50,20,5,30]

const mini=Math.min(...number1);
console.log(mini);


console.log("mini");

// find the smallest element from array

const arr=[10,20,1,52,45,30];

let min=arr[0];
for(let i=1;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min);


//sort in array of ascending order

let ascenNum=[10,1,101,20,3,45,60];

let result=ascenNum.sort((a,b)=>{  return  a-b
})
console.log(result);

