const mongoose=require('mongoose')
require('dotenv').config({path:'./.env.local'})
const uri = process.env.MONGO

const connectMongo = () => {
    try {
       mongoose.connect(uri) 
       console.log('mongodb connected')
    } catch (error) {
        console.log('some error occured with mongodb')
    }
    
}

module.exports=connectMongo