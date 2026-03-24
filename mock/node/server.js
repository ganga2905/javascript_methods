const express=require('express');
const app=express();

const checked=(req,res,next)=>{
    const user={isBlocked:false}
    
    if(user.isBlocked){
      return   res.send("user blocked")
    }
    next()
}
app.use(checked)
app.use(express.json())

app.post('/register',(req,res)=>{
    const user=req.body;
    res.send({
        message:"user register succefully",
        data:user
    })
})


app.get('/',(req,res)=>{
    res.send("server listening")
})

app.get('/users',(req,res)=>{
    const user=[
        {id:1,name:"ganga"},
        {id:2,name:"gayathri"}
    ]
    res.send(user)
})




app.listen(3000,()=>{
    console.log("server listening");
    
})