const Switch =require("../models/Switch");

const switchId='64dce4298def9d2ac8c25463'

const middleware=async(req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    try{
        const resp = await Switch.findById(switchId)
        req.status=resp.status
        next();
}catch(error){
    res.status(401).send(error);
    
}
}

module.exports=middleware