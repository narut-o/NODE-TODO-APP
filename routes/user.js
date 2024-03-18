import express from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.js";

const router = express.Router();

router.get('/all',getAllUsers)
router.route("/userid/:id").get(getUserById).put(updateUserById).delete(deleteUserById);
router.post('/new',createUser)


// router.put("/userid/:id",updateUserById)
// router.delete("/userid/:id",deleteUserById)
export default router;