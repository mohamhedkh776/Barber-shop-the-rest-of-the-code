const express = require('express');
var cors = require('cors');
const connection =require('./connection');
const products=require('./routes/products')
const app =express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('./products',products);
module.exports=app;