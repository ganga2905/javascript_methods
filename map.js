//Map is a JavaScript collection used to 
// store key-value pairs where keys can be 
// any data type and elements maintain insertion order.


const userMap=new Map();
userMap.set("name","ganga");
userMap.set('age',21)

console.log(userMap);

function frequecyCount(arr){
    const map=new Map();
    for(let i=0;i<arr.length;i++){
        const element =arr[i];
        map.set(element,(map.get(element) || 0)+1);
    }
    return map
}
const array=[1,0,2,3,0,1,33,4,4,5,6];
console.log(frequecyCount(array));


