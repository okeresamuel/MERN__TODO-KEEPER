const mongoose = require("mongoose")
db = process.env.mongodburl
 try {
    mongoose.connect(db) ? console.log(`connected`) : "mongoose connection error"  
 } catch (error) {
   console.log(error)  
 }
