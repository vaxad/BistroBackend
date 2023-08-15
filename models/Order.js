const {Schema,model} = require('mongoose')

const orderSchema = new Schema({
    cart:[{
        type:Object,
    }],
    customer:{
        name:String,
        address:String,
        email:String,
        phone:String,
        upi:String, 
    },
    accepted: {
        type:String,
        default:"false"
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

const Order = model('order',orderSchema)
module.exports=Order