//Required Modules
const mongoose = require('mongoose');


//creating a USER SCHEMA 
const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        //require:true,
    },

    email:{

        type:String,
        required:true,
        // unique:true

    },
    password:{

        type:String,
        // required:true,

    }
});



module.exports = mongoose.model("AdminUser",UserSchema);

