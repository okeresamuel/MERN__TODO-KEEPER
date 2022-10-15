const mongoose = require("mongoose")
const passportlocalmongoose = require("passport-local-mongoose")

const userSchma = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "please pass in a username"],
    },
},{
    timestamps: true
})
userSchma.plugin(passportlocalmongoose)
const user = new mongoose.model("todoUsers", userSchma)
module.exports = user;