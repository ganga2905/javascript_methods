const promise= new Promise((resolve,reject)=>{
    const sum=10+20;
    if(sum==30){
        resolve("success")
    }
    else{
        reject("error")
    }
})

promise.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error);
    })



 setTimeout(()=>{
    console.log("Welcome");
    
 },1000)   