const express = require('express');
const app = express();

const DB = 'mongodb+srv://project0:0project@cluster0.njcyo.mongodb.net/p0database?retryWrites=true&w=majority'

const middleware = (req,res,next)=>{
    console.log("hellooo middleware");
    next();
};

app.get('/', (req,res)=>{
    res.send("helllo home page");
});
app.get('/about', middleware, (req,res)=>{
    console.log("helloo about")
    res.send("helllo about page");
});
app.get('/contact', (req,res)=>{
    res.send("helllo contact page");
});
app.get('/signin', (req,res)=>{
    res.send("helllo signin page");
});

app.listen(5000,()=>{
    console.log(`server port no is 5000`);
});