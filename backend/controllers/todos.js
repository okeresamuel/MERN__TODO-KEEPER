const asyncHandler = require("express-async-handler")
const todos = require("../models/todos")
const User = require("../models/user")


// decs get all goals
const get__todos = asyncHandler(async(req, res) => {
 const foundtodos = await todos.find({user: req.user.id})
 const [user] = foundtodos
 res.status(200).json(foundtodos)
})

// make a goal
const post__todos = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error, "please enter a text fied"
    }
  const newtodo = await todos.create({text: req.body.text, user: req.user.id})
  res.status(200).json(newtodo)
})

// desc Update goal route
const update__todos = asyncHandler(async (req, res)=>{
    try {
        const foundUser = await todos.find({user: req.user.id})
        const [user] = foundUser
    
        if(!req.body){
            res.status(400)
            throw new Error, "please enter a text fieds"
        }
        // check for user
        if(!req.user.id){
            res.status(401)
            throw new Error, "User not found"
        }
        if(user.user.toString() !== req.user.id){
            res.status(401)
            throw new Error, "user not authorized"
        }
        
        const updatedtodo = await todos.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatedtodo)
    } catch (error) {
        res.status(401).json(error.message)
    }
   
   
})


// description Delete Route
const delete__todos = asyncHandler(async(req, res)=>{
    try {
     const foundUser = await todos.find({user: req.user.id})
     const [user] = foundUser 
    // check for user
    console.log(user)
    if(!user){
        res.status(401)
        throw new Error, "User not found"
    }
    if(user.user.toString() !==  req.user.id){
        res.status(401)
        throw new Error, "user not authorized"
    }
 
    const deletedtodo = await todos.findByIdAndDelete(req.params.id, {new: true})
    res.status(200).json(deletedtodo)        
    } catch (error) {
    res.status(401).json(error.message)   
    }

})

module.exports = {
    get__todos,
    post__todos,
    update__todos,
    delete__todos
}

// end