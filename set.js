// set is a unique value stored :-

const user=["ganga","gayathri","harish","aadhi","ganga","aadhi"];

const unique=new Set(user);
console.log(unique);

const uniqueArray=[...unique];
console.log(uniqueArray);

const mySet=new Set([1,2,3,4])
mySet.add(40)
mySet.add(40)
mySet.delete(4)
console.log(mySet.has(40));
console.log(mySet);

function secondLar(num){

    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]>num[j]){
                let temp=num[i];
                num[i]=num[j];
                num[j]=temp
            }
        }

    }
    return num

}
 console.log(secondLar([10,20,70,80,25,69,155]))


