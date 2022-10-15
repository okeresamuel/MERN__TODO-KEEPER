const express = require("express")
const router = express.Router()
const {get__todos, post__todos, update__todos, delete__todos} = require("../controllers/todos")
const { protect } = require("../middleware/Auth")



router.get("/api/todos", protect, get__todos)
router.post("/api/todos", protect, post__todos)
router.put("/api/todos/:id",  protect, update__todos)
router.delete("/api/todos/:id", protect, delete__todos)

module.exports = router