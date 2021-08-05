var nodemailer = require('nodemailer');
//sends an email to a givven address 
exports.email = function(value){
    return new Promise((resolve,reject)=>{
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'dinid58443@gmail.com',
            pass:'310101dini'
        }
    });

    var mailOptions = {
        from:'dinid58443@gmail.com',
        to: value.email,
        subject:'Message from: My Family And Other Animals',
        text:`Hi ${value.name}!\n we in the "My Family And Other Animals" store
         have got your message about:\n \\${value.subject}
         and we think about it.
         always happy to hear from you -\n
         the pets' staff`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
         reject(error)
        } else{
            console.log('sent email!')
            resolve('email sent')
        }
    })
 })
}
