const express = require('express');
const path=require('path');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const rootDirectory=require('./utilities/path');
const adminRouter=require('./routes/admin');
const mainRouter=require('./routes/main');
const app=express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended:true}));
//body-parser-polu4aem dannie iz formi, t.e
// polu4aem dannie ot polzovatelja na server i body-parser nahodit eti dannie
app.use(express.static('public'));


app.use('/admin', adminRouter.router);
//admin- is a filter, isp iz admin router tolko router s metodami get/post,ptoducti budut v dr faile 
// when button Add product is pressed
app.use(mainRouter);//isp ejs-peredaem dannie kot polu4it server s html shblonom
  

app.use((req,res)=>{
    res.render('404.ejs', {pageTitle: "Page Not Found", path: ''});
    //res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});

app.listen(4000, ()=>{
    console.log('Server is running on Port 4000');
})