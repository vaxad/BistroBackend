const express = require('express')
const app=express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const connectMongo = require('./db')
connectMongo()

app.use('/api/item',require('./routes/item'))
app.use('/api/order',require('./routes/order'))
app.use('/api/feedback',require('./routes/feedback'))
app.get('/',(req,res)=>{
    res.send('server working')
})

app.listen(4000,()=>{
    console.log('server up')
})