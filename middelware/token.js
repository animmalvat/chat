const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.token = async function(Email) {
    return new Promise (function(resolve,reject){
        return token = jwt.sign({
            email: Email
        } , 'shhhhh', {
            expiresIn : 60
        }, function(err,data){
            if(err){
                return reject("Expired")
            }
            else {
                return resolve(data)
            }
        })
    })
}