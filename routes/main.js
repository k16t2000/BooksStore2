const path=require('path');
const rootDirectory=require('../utilities/path');
const express=require('express');
const adminData=require('./admin');//exportiruju dannie iz admin faila, 4tobi polu4it dannie products
const router=express.Router();
//mini app pluggable to another express app

router.get('/', (req,res)=>{
   const products=adminData.products;//v products sohranaju dannie iz admin faila tovari
   //teper vivodim dannie
   //productsMain idet v ejs, products polu4aju iz admin faila
   res.render('shop.ejs',{
       productsMain: products,
       pageTitle: 'Main Page',
       path: '/'
     
   });
   
});



module.exports=router;