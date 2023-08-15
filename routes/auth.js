const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    const {pass}=req.body
    if(pass==="admin0511"){
        res.send(true)
    }else{
        res.send(false)
    }
})

module.exports = router