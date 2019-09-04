const userModel = require('../models/user.model');
const Token = require('../middelware/token');
const msg = require('../middelware/response');

exports.helloworld = (req, res)=>{
    res.send("Hello World");
}

exports.welcomeapi = (req, res)=>{
    var message = "Welcome to chat backend api, this api was made in node js express js. to use this api";
    message += "you can use /methods for further api calls, you know what I am saying if you are anim";
    res.send(message);
}

exports.signup = (req,res) => {
   
    if(!req.body.email && !req.body.password ) {
        return res.send(msg(null,true,"please enter credentials"));
    }
    else{
       
  
        userModel.findOne({email : req.body.email}).then(function(data){
            if(data == null) {
                
                var user = new userModel({
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password
                })
                
                user.save(function(){
                    return res.send(msg( null, false , "successfully"));
                });
            }   
            else{
              return res.send(msg(null , true , "mail id already  used"));
            }
                
        }).catch(err=>{
            return res.send(msg(err,true, "error"))
        })
        
    
    }
        
}

exports.login = function(req,res){
    if(!req.body.email && !req.body.password ) {
        return res.send(msg( null , true, "please enter credentials"));
    }
  
    var email = req.body.email;
    var password = req.body.password;

    userModel.findOne({email:email}).then(async function(data,err){
        if(data){
            var tokendata = await Token.token(email);

             if(password == data.password){
                return res.send(msg(tokendata , false , "logged in"));
            }
            else {
              return res.send(msg(err, true, "somethig went wrong" ));
            }
        }
        else {
            return res.send(msg(err , true , "data not found"))
        }
     })
}

