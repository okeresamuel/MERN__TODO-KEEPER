const User = require("../models/user")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const protect = asyncHandler(async (req, res, next) =>{
let token 
  
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      // get token from headers
          token = req.headers.authorization.split(" ")[1] 
          decode = jwt.verify(token, process.env.jwt_secret)
      
      // get user from token 
      req.user = await User.findById(decode.id).select("-password") 
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error, "Not Authorized"
    }
  }
  if(!token){
    res.status(401)
    throw new Error, "Not Authorized no token found"
  }

})

module.exports = {
  protect
}

