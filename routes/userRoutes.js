import { Router } from "express";
import { createUser, fetchUserById, fetchUsers, updatePassword, deleteUser } from "../Controller/UserController.js";

const router = Router();

router.get("/", fetchUsers)
router.get("/:id", fetchUserById);
router.post("/", createUser);
router.patch("/:id", updatePassword);
router.delete("/:id", deleteUser)

export default router;