const {Schema, model} = require('mongoose')

const switchSchema = new Schema({
    status:{
        type:String,
        default:"Offline"
    }
})

const Switch = model('switch',switchSchema)

module.exports=Switch