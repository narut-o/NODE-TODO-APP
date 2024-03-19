import express from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const  router = express.Router();


router.post('/new',isAuthenticated,createTask)
router.get('/get',isAuthenticated,getTask);

router.route('/:id').put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);





export default router;




