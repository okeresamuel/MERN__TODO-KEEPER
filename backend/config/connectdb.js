const mongoose = require("mongoose")
db = "mongodb+srv://okere:7218@cluster0.ljvwzic.mongodb.net/?retryWrites=true&w=majority"
 try {
    mongoose.connect(db) ? console.log(`connected`) : "mongoose connection error"  
 } catch (error) {
   console.log(error)  
 }
