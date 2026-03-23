// create the server
// 1. Create a simple Express server with a route /
//  that returns "Welcome to API"`. 

const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('welcome to api')
})

//. Create an API route /products that 
// returns an array of product objects in JSON 
//format.:-

app.get('/products',(req,res)=>{
    const products=[
        {id:1,name:"ganga",price:15000},
        {id:2,name:"gaya",price:20000}
    ]
    res.json(products)
})

// 3. Write a middleware that logs the
//  request time for every API call. 



app.listen(3000,()=>{
    console.log("server listening");
    
})


