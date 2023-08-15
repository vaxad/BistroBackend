const express = require ('express');
const Feedback = require('../models/Feedback');
const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        const feedbacks = await Feedback.find();
        res.json({success:true,feedbacks:feedbacks,total:feedbacks.length})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const feedback = await Feedback.findById(req.params.id)
        res.json({success:true,feedback:feedback})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.post('/',async(req,res)=>{
    try {
        const {email,subject,message} = req.body
        const feedback = await Feedback.create({
            email,subject,message
        })
        res.json({success:true,feedback:feedback})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.post('/',async(req,res)=>{
    try {
        const {email,subject,message} = req.body
        const feedback = await Feedback.create({
            email,subject,message
        })
        res.json({success:true,feedback:feedback})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const {email,subject,message} = req.body
        const newFeedback = await Feedback.findById(req.params.id)
        if(email)newFeedback.email=email
        if(subject)newFeedback.subject=subject
        if(message)newFeedback.message=message
        const feedback = await newFeedback.save()
        res.json({success:true,feedback:feedback})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id)
        res.json({success:true,feedback:feedback})
    } catch (error) {
        res.json({success:false,error:error})
    }
})

module.exports=router