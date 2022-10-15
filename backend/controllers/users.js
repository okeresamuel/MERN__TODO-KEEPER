const User = require("../models/user")
const jwt = require("jsonwebtoken")


const register = async (req,res)=>{
    let {username, email, password} = req.body;
    try {
    const newuser = new User({username, email,})
    const registeredUser =  await User.register(newuser, password)
    if(registeredUser){
        res.status(200).send({
        _id: registeredUser.id,
        username: registeredUser.username,
        email:  registeredUser.email,
        token: generateJwt(registeredUser._id),
     })
     }
    } catch (error) {
     res.status(401).send(error.message)
}
}


// description = login user
const login = async (req,res)=>{
User.findOne({username: req.body.username}, (err, user)=>{
if(err){
    res.status(400).json({message: err.message})
 }else{
    res.json({
      _id: user.id,
      username: user.username,
      email:user.email,
      token: generateJwt(user._id)
    })
 }
})
}

const me = async (req,res, next)=>{
   res.status(200).json(req.user)
}


// generate jwt
const generateJwt = (id) =>{
    return jwt.sign({id}, process.env.jwt_secret, {expiresIn: "30d"})
}


module.exports = {
    register,
    login,
    me
}