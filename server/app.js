require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const app=express();
require('./db/conn');
const users = require('./model/userSchema')
const cors = require('cors');
const router= require('./Routes/router')

const port = process.env.PORT || 8003;
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>
{
    console.log(`Server is started at the port number ${port}`);
})
