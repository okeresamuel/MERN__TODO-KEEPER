const express = require("express")
const passport = require("passport")
const {register, login, me} = require("../controllers/users")
const router = express.Router()

const { protect } = require("../middleware/Auth")
router.post("/api/users/register", register)
router.post("/api/users/login", passport.authenticate("local"), login)
router.post("/api/users/me", protect, me)
module.exports = router