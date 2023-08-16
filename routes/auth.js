const express = require('express')
const Switch = require('../models/Switch')
const router = express.Router()

router.post('/',(req,res)=>{
    const {pass}=req.body
    if(pass==="admin0511"){
        res.json({auth:true})
    }else{
        res.json({auth:false})
    }
})

const switchId='64dce4298def9d2ac8c25463'

router.get('/status',async(req,res)=>{
    try {
        const resp = await Switch.findById(switchId)
        res.json({success:true,status:resp.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.put('/off',async(req,res)=>{
    try {
        const resp = await Switch.findById(switchId)
        resp.status="offline"
        const newres=await resp.save()
        res.json({success:true,status:newres.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.put('/on',async(req,res)=>{
    try {
        const resp = await Switch.findById(switchId)
        resp.status="online"
        const newres=await resp.save()
        res.json({success:true,status:newres.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})



module.exports = router