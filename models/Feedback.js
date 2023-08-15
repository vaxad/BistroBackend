const {Schema,model} = require('mongoose')

const feedbackSchema = new Schema({
    email:{
        type:String,
        required:true
    },subject:{
        type:String,
        required:true
    },message:{
        type:String,
        required:true
    }
})

const Feedback = model('feedback',feedbackSchema)
module.exports=Feedback