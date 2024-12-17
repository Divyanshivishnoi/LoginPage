const express = require("express");
const app=  express();    // created an express app
const bodyParser= require("body-parser");   // used to parse the body of incoming HTTP request 
const cors = require("cors");
require('dotenv').config();
require('./Models/db');
const AuthRouter = require('./Routes/AuthRouter')

const PORT= 8000;


// const PORT= process.env.PORT;

app.get('/ping', (req,res) =>{
    res.send('PONG');
})
app.use(bodyParser.json());
app.use(cors());



app.use('/auth' ,AuthRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on port${PORT}`);
})
