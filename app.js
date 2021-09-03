const express = require('express');
const app = express();

// router
app.use('/',require('./routes/index'));
// app.use('/user',require('./routes/user'));

const port = 8000;

app.get('/home',(req,res,next)=>{
        console.log('1st function');
        // next();
        res.send('FInished');
        // next();
    },function(req,res){
        console.log('2nd function');
        res.send('Hello 12222');
    }
)

app.listen(port,()=>{
    console.log('Server is running........');
})