const express = require('express');
const app = express();
const port = 3001;

// use express router
app.use('/',require('./routes'));


app.listen((port,(err)=>{
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    else console.log(`server has started on ${port}`)
}))