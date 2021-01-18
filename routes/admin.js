const path=require('path');
const rootDirectory=require('../utilities/path');
const express=require('express');
const router=express.Router();
const products=[]; 
//sohranem dannie vvedenie polzovatelja v massiv
//mini app pluggable to another express app

router.get('/add-product', (req,res)=>{
    res.render('add-product.ejs',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
});
 //vvoda dannih soderzitsa v req, 
    //pustoj massiv -products, push-dob v massiv-objekt title:
router.post('/add-product', (req,res)=>{
    products.push({title: req.body.title});
    res.redirect('/');
});

//exports
exports.router=router;//export router with get/post
exports.products=products;//export massive with datas