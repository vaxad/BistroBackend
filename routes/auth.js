const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    const {pass}=req.body
    if(pass==="admin0511"){
        res.json({auth:true})
    }else{
        res.json({auth:false})
    }
})

module.exports = router