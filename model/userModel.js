// import mongoose 
const mongoose = require('mongoose')

//create a db scheme ref new mongoose.scheme(schema,collection)
const userSchema = new mongoose.Schema({
    name:{
        type:String, //datatype
        required:true // mandatory field
    },
    email:{
        type:String,
        required:true,
        unique:true // unique => will not allow duplicates
    },
    mobile:{
        type:String, // if we have country code must be string
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
},{
    collection:'users', // name of the collection
    timestamps:true // log the created and updated times in collections
})
module.exports = mongoose.model("User",userSchema) // model(Export schema Name , Schema ref)