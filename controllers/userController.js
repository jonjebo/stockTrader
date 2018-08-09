const db = require("../models");


module.exports = {
    signup: (req, res)=>{
        console.log(req.session);
        const newUser = {
            "username": req.body.username,
            "password": req.body.password
        };
        db.User.create(newUser)
        .then(returnedUser => {
            if (returnedUser) {
                req.session.user=returnedUser._id
                req.session.username=returnedUser.username
                res.send({
                    message:"username " + returnedUser.username + " created",
                    loggedIn:true,
                    username:returnedUser.username
                })
            }
        })
        .catch(err => {
            res.send({message: "Username already taken, please create new username"})
        })
    },
    login: (req, res)=>{ 
        db.User.findOne({"username": req.body.username})
        .then(returnedUser => {
            if (returnedUser) {
                if (returnedUser.password === req.body.password) {
                    req.session.user=returnedUser._id
                    req.session.username=returnedUser.username
                    res.send({
                        message:returnedUser.username + " logged in successfully",
                        loggedIn:true,
                        username:returnedUser.username  
                    }) 
                } else {
                    res.send({
                        message:" password invalid",
                        loggedIn:false,
                        username:"" 
                    })
                }
            } else {
                res.send({message: "Username not found, please sign up"})
            }
            
        })
        .catch(err => {
            res.send({message: "Username not found, please sign up"})
        })
    },

    logOut: (req, res) =>{
        req.session.user=null
        req.session.username=null
        res.send({
            message:returnedUser.username + " logged out successfully",
            loggedIn:false,
            username:""  
        })
    },

    isLoggedIn: (req, res) =>{
        console.log(req.session);
        if (req.session.user){
            res.send({
                message:req.session.username + "is still logged in",
                loggedIn:true,
                username:req.session.username 
            })

        } else {

            res.send({
                message:" Please log in",
                loggedIn:false,
                username:""  
            })
        }
    },
    
    update: (req, res)=>{
        console.log("UPDATE USER:");
        console.log("--DO NOTHING");
        console.log(req.body);
    },
    remove: (req, res)=>{
        console.log("DELETE USER:");
        console.log("--DO NOTHING");
        console.log(req.body);
    }
};