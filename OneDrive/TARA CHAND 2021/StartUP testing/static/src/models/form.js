const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const form = new mongoose.Schema({
    user__name : {
        type : String,
        required : true 
    },
    user__email : {
        type : String,
        required : true,
        unique : true,
    },
    user__phone : {
        type : Number,
        required : true,
        unique : true,
    },
    user__password : {
        type : String,
        required : true 
    },
    user__confirm_password : {
        type : String,
        required : true
    },
    tokens : [{
        user__token:{
            type : String,
            required : true
        }
    }]
});

//json web tocken
form.methods.generateAuthToken = async function(){
    try {
        const token = await jwt.sign({_id:this._id.toString()},"mynameistarachandkumawattaraisgo"); // create tokens 
        // console.log(token);
        this.tokens = this.tokens.concat({user__token:token}); // save tokens in the database;

        // tokens is the name of database array of object name
        // user_token is the name of object which is present in the tokens array 

        // {user__token:token}  first value hamesa jo database me hai vo hogi and second value jo : ke baad aayegi vo variable hoga 
        // user__token is present database and token is create const variable by the user whick is used to create token string
        // await this.save(); // save data in the dbms
        return token; // returns token

        // async function ke liye try and catch ka use kre and jaha this ka use kre wahh feat aerro ka use ka kre wahh direct normal function ka use kre

        // form.methods  is a instance and instance me this ka use hota hai 

        
    } catch (error) {
        console.log("Token error is "+error);
    }
}

// bcrypt

form.pre("save", async function (next){
    if(this.isModified("user__password")){
        // console.log(this.user__password);
        this.user__password = await bcrypt.hash(this.user__password,10);
        // console.log(this.user__password);
        this.user__confirm_password = undefined;
    }
    next();
});

// model

const form__model = new mongoose.model("tarForm",form);
module.exports = form__model;
// module.exports