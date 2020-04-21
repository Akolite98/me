const functions = require('firebase-functions');
const express = require('express');
const userRouter = require('./routes/user.js');

const app = express();

app.set('view engine', 'ejs');

app.use('/',userRouter);

app.use((req,res,next)=>{
    res.render('404',{
        title: "Amadi Chukwuemeka Austin | Software Engineer",
    
        description:"Am a Software Engineer who is passionate about solving complex problems by Building technological solutions out of business needs",});
}
);

exports.app = functions.https.onRequest(app);

