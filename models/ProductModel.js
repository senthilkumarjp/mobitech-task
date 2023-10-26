const  mongoose  = require("mongoose");

const ProductSchema = new mongoose.Schema({
    created_at:{
        type: Date,
        default: Date.now,
     },
     updated_at:{
        type: Date,
        default: Date.now,
     },
     name:{
        type:String
     },
     description:{
        type:String
     },
     brand:{
        type:String
     },
     offers:{
        type:Number
     },
     price:{
        type:Number
     }
})

module.exports = mongoose.model("Product",ProductSchema);