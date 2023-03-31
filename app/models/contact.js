const mongoose =require('mongoose')
const Schema = mongoose.Schema //class/constructor fucntion

const contactSchema = new Schema({
    name:{type:String, required: true},
 
    email:{type:String, required: true,unique:true},
    message:{type:String, required: true},
    role :{type:String,default:'customer'}
},{timestamps:true})

// const Menu = mongoose.model('Menu',menuSchema)
module.exports = mongoose.model('Contact',contactSchema)