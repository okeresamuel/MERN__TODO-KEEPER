const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    text:{
        type:"string",
        required: [true, "please enter a text field"]
    }
},{
    timestamps: true
})

const todos = mongoose.model("Alltodos", schema)
module.exports = todos
