const exp = require('constants');
const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const pug = require("pug");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("cookie-parser");
require("./static/src/db/conn");
const form = require("./static/src/models/form");
const cookieParser = require('cookie-parser');

const port = process.env.PORT ||80;

const app = express();

app.use(express.urlencoded({extended : false})); // browser par user ka koi data show karane ke liye like json formate

app.use(cookieParser());
app.use("/static",express.static("static"));


app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.get("/",(req,res)=>{
    res.status(200).render("index");
});


app.get("/secret",(req,res)=>{
    console.log(`this is cookie is awesome ${req.cookies.jwt}`);
    res.render("secret");
});

app.post("/",async(req,res)=>{
    // var myData = new form__model(req.body);
    // myData.save().then(()=>{
    //     res.status(200).render("home");
    // }).catch(()=>{
    //     res.status(404).send("Not save");
    // });

    try {
        const password = req.body.user__password;
        const confirm__password = req.body.user__confirm_password;

        if(password===confirm__password){

            const taraForm = new form({
                    user__name : req.body.user__name,
                    user__email : req.body.user__email,
                    user__phone : req.body.user__phone,
                    user__password : req.body.user__password,
                    user__confirm_password : req.body.user__confirm_password,
                });

                console.log("the success part is "+taraForm);
                const token = await taraForm.generateAuthToken(); //create token 
                console.log("The token part is " + token);

                // res.cookie() function is used to set cookie name to value.
                // the value parameter may be a string or object convertef to json
                res.cookie("jwt",token,{
                    expires:new Date(Date.now()+30000), // time for cookies expire 
                    // httpOnly:true, // jaha par http hoga vahi cookies save hogi
                    // secure:true,
                });
                // console.log(`the cookies is ${cookie}`);

            const forms = await taraForm.save(); // data save in database;


            res.status(201).render("home");
        }
        else{
            console.log("password is not same");
            res.send("password is not same");
        }
    } catch (error) {
        res.status(404).send(error);
    }
});



app.get("/login",(req,res)=>{
    res.status(200).render("login");
});

app.post("/login",async(req,res)=>{
    try {
        const user_login_email = req.body.user_login_email;
        const user_login_password = req.body.user_login_password;

        const findmail = await form.findOne({user__email : user_login_email});

        const ismatching = await bcrypt.compare(user_login_password,findmail.user__password);

        const token = await findmail.generateAuthToken(); //create token 
        console.log("The token part is " + token);

        res.cookie("jwt",token,{
            expires:new Date(Date.now()+30000), // time for cookies expire 
            // httpOnly:true, // jaha par http hoga vahi cookies save hogi
            // secure:true,
        });

        if(ismatching){
            res.status(201).render("home");
        }
        else{
            res.send("Password not matching");
        }
    } catch (error) {
        console.log(`Error is : ${error}`);
        res.status(404).send("Invalid email");
    }
})
app.listen(port,()=>{
    console.log(`server has been started on ${port} `);
});