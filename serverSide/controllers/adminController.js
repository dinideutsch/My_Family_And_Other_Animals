var Admin = require('../models/admins')
const jwt = require('jsonwebtoken')

//returns all the admins
exports.getAll = function(req, res, next){
    Admin.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
        console.log(list);
    })
}

//creates a new admin
exports.createAdmin = function(req, res, next){
    var admin = new Admin({
        name: req.body.name,
        password: req.body.password,
    });
    admin.save(function (err){
        if(err) return next(err);
        res.send(admin);
    })
}

 //creates the token if the admin exists
 exports.login = function (req,res) {
   const {name, password} = req.body;
   Admin.find({name}).then((admins)=>{
   if(admins.length === 0){
       return res.status(401).json({ 
        message:'Auth failed'
      });
     } 
     const [admin] = admins;
     if(password===admin.password){
       const token = jwt.sign({
         id: admin._id,
         name: admin.name,
       },'animal-store',{
         expiresIn: "1H"
       });
       return res.status(200).json({
         message: 'Auth successful',
         token: token
      })
     }
     res.status(401).json({
       message: 'Auth failed'
     }); 
   })
}

