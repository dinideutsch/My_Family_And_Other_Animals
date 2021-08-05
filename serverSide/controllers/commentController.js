var Comment = require('../models/comments');
var mailService = require('../services/mailService')

//return all the comments
exports.getAll = function(req, res, next){
    Comment.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })
}

//calls the email service
exports.email = async function(req, res){
 try{
   await mailService.email(req.body);
    res.send('sent email');
    }catch(error){

    }
}

//add a new comment 
exports.createComment = function(req, res, next){
    var comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        content: req.body.content
    });
        comment.save(function (err){
            if(err) return next(err);
            res.send(comment);
        })
    }

//deletes a comment
 exports.delete_comment = function(req, res, next){
    console.log('will delete ', req.params.id)
    Comment.findByIdAndDelete(req.params.id, function(err){
        if(err) return next(err);
        res.send();
    });
    
}
