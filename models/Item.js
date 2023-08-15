const {Schema,model} = require('mongoose')

const itemSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

})

const Item = model('item',itemSchema)
module.exports=Item