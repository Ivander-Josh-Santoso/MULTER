const express = require ('express');
const app = express();
const port  = 3002;
const mainRouts= require('./src/routes')
 
app.use(express.urlencoded({extended:false}));
app.use ('/', mainRouts)

app.listen (port, ()=>{
    console.log ('server run in port  '+ port)
});