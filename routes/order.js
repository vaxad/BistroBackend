const express = require ('express');
const Order = require('../models/Order');
const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        const orders = await Order.find().sort({date:-1})
        res.json({success:true,orders:orders,total:orders.length})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id)
        res.json({success:true,order:order})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.post('/',async(req,res)=>{
    try {
        const {cart,name, address, upi, email, phone} = req.body
        const customer = {name, address, upi, email, phone}
        const order = await Order.create({
            cart: cart,customer:customer
        })
        res.json({success:true,order:order})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const newOrder = await Order.findById(req.params.id)
        newOrder.accepted="true"
        const order = await newOrder.save()
        res.json({success:true,order:order})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const newOrder = await Order.findById(req.params.id)
        newOrder.accepted="cancelled"
        const order = await newOrder.save()
        res.json({success:true,order:order})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        res.json({success:true,order:order})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

module.exports=router