const express =  require("express")
require('dotenv').config();
require("./config/connectdb")
const app = express()
const path =  require("path")
const User = require("./models/user")
const passport = require("passport")
const localStrategy = require("passport-local")
const cors = require("cors")
const sesssion = require("express-session")

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "./frontend/build")))
  app.get("*", (req, res)=> res.sendFile(path.resolve(__dirname, "./",  "frontend", "build", "index.html")))
}

app.use(sesssion({
  secret:"app",
  resave:false,
  saveUninitialized:false,
}))
app.use(cors())
app.use(passport.initialize())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.urlencoded({limit:"30mb", extended:false}))
app.use(express.json())
app.use("/", require("./routes/todos"))
app.use("/", require("./routes/users"))

const port = process.env.PORT || 3000
app.listen(port, console.log(`listing on port ${port}`))
