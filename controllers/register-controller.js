var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "email":req.body.email,
        "password":encryptedString,
        "username":"username1",
        "orgType":"orgType1",
        "street_address":"8483 NoWhere Ln",
        "city":"city1",
        "state":"state1",
        "first_name":"fname",
        "last_name":"lname",
        "phone_number":"1-234-233-2334"
    }
    connection.query('INSERT INTO donor SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}

