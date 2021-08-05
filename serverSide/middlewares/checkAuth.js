const jwt = require('jsonwebtoken');
//authentication function
const checkAuth = (req,res, next)=>{
   try{  
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,'animal-store');
    next();
   }catch(error){
       res.status(401).json({
           message:'Auth failed'
       })
   }
}
module.exports = checkAuth;