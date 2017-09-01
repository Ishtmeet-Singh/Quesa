
var express = require('express');
var router = express.Router();
var UserSchema = require('../src/Schemas/UserSchema.js');

/* Checking avaibility */
router.get('/', function(req, res, next) {
        UserSchema.findOne({username: req.query.username}, function(err, response){
            if(err){
                res.json({
                    confirmation: 'fail',
                    err: err
                })
            }else{
                console.log(response)
                res.json({
                    confirmation: 'success',
                    result: response
                })
            }
        })
        
});
/* Entering new User */
router.post('/', function(req, res, next) {
    UserSchema.create(req.body, (err, response)=>{
        if(err){
            res.json({
                error: err
            })
        }else{
            res.json({
                responseojb : response
            })
        }
    })
});
module.exports = router;
