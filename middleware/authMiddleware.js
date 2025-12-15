const jwt=require("jsonwebtoken");
const authMiddleware=async (req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({error:"Unauthorized"});
    }
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
       return  res.status(401).json({error:"Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,"secret123");
        req.user=decoded;
        next();    
    }catch(err){
        res.status(401).json({error:"Invalid token"});
    }

}
module.exports=authMiddleware;