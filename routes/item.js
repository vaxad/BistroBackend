const express = require ('express')
const Item = require('../models/Item');
const middleware = require('../middleware/middleware');
const router = express.Router()

router.get('/all',middleware,async(req,res)=>{
    try {
        const items = await Item.find();
        res.json({success:true,items:items,total:items.length,status:req.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.get('/',middleware,async(req,res)=>{
    try {
        const items = await Item.find({stock:"true"});
        res.json({success:true,items:items,total:items.length,status:req.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.get('/:id',middleware,async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        res.json({success:true,item:item,status:req.status})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.post('/',async(req,res)=>{
    try {
        const {title,description,price,stock,img} = req.body
        const item = await Item.create({
            title,description,price,stock,img
        })
        res.json({success:true,item:item})
    } catch (error) {
        res.json({success:false,error:error})
    }
})


router.put('/:id',async(req,res)=>{
    try {
        const {title,description,price,stock,img} = req.body
        const newItem = await Item.findById(req.params.id)
        if(title)newItem.title=title
        if(description)newItem.description=description
        if(price)newItem.price=price
        if(stock)newItem.stock=stock
        if(img)newItem.img=img
        const item = await newItem.save()
        res.json({success:true,item:item})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const item = await Item.findByIdAndDelete(req.params.id)
        res.json({success:true,item:item})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

module.exports=router