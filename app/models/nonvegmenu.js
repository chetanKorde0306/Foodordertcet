const mongoose =require('mongoose')
const Schema = mongoose.Schema //class/constructor fucntion

const menuSchema = new Schema({
    name:{type:String, required: true},
    image:{type:String, required: true},
    price:{type:Number, required: true},
    desc:{type:String, required: true}
})

// const Menu = mongoose.model('Menu',menuSchema)
module.exports = mongoose.model('nonvegmenus',menuSchema)