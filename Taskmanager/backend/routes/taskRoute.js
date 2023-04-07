const express = require("express")
const Task =require("../model/taskmodel")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/taskcontroller")
    
const router = express.Router()



router.post("/tasks", createTask)


router.get("/tasks",getTasks)
router.get("/tasks/:id",getTask)
router.delete("/tasks/:id",deleteTask)
router.put("/tasks/:id",updateTask)






module.exports =router