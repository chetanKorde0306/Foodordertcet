const mongoose =require('mongoose')
const Schema = mongoose.Schema //class/constructor fucntion

const icemenuSchema = new Schema({
    name:{type:String, required: true},
    image:{type:String, required: true},
    price:{type:Number, required: true},
    desc:{type:String, required: true}
})

module.exports = mongoose.model('icemenus',icemenuSchema)