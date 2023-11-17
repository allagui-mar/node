var nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport(
    {
        service:'gmail',
        auth :{
            user:'yourmail@gmail.com',
            pass:'your-password',
        }
    });
    
    var mailOptions={
        from :'yourmail@gmail.com',
        to :'yourmail@gmail.com',
        subject:'text email',
        text:'this is a test email',
     };
    transporter.sendMail(mailOptions,function(error,info){
     if (error){
        console.log(error)
     }else{
        console.log('email sent :', +info.reponse)
     }

    });

    