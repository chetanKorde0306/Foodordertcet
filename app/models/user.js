const mongoose =require('mongoose')
const Schema = mongoose.Schema //class/constructor fucntion

const userSchema = new Schema({
    name:{type:String, required: true},
    username:{type:String, required: true},
    phonenumber:{type:Number, required: true},
    email:{type:String, required: true,unique:true},
    password:{type:String, required: true},
    role :{type:String,default:'customer'}
},{timestamps:true})

// const Menu = mongoose.model('Menu',menuSchema)
module.exports = mongoose.model('User',userSchema)