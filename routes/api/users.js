const express = require('express');
const router = express.Router();
const brcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
/*
* @route POST api/users/register
* @desc Register the User
* @access Public
*/
router.post('/register',(req,res) => {
    let {
        name, 
        username,
        email, 
        password, 
        confirm_password
    } = req.body 
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Password not match"
        });
    }
    User.find({username: username}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "User name is already taken"
            });
        }
    });

    //Uniq username
    User.findOne({username: username}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "User name is already taken"
            });
        }
    });

    //uniq email
    User.findOne({email: email}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "Email is already register"
            });
        }
    });
    
    // data validation

    let newUser = new User({
        name,
        username,
        password,
        email
    });

    brcrypt.genSalt(10, (err, salt)=>{
        brcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now register"
                });
            });
        });
    });

});

/*
* @route POST api/users/login
* @desc Login the User
* @access Public
*/
router.post('/login',(req,res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if(!user){
            return res.status(404).json({
                msg: "Username is not found",
                success: false
            });
        }
        brcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                const payload = { 
                    _id: user.id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, { 
                    expiresIn: 604800
                }, (err,token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "You are loogin"
                    });
                });
            }else{
                return res.status(404).json({
                    msg: "Incorect password",
                    success: false
                });
            }
        });
    })
});

/*
* @route POST api/users/profile
* @desc Return data
* @access Private
*/
router.get('/profile', passport.authenticate('jwt',{
    session: false
}),(req, res) => {
    return res.json({
        user: req.user
    });
});
module.exports = router;