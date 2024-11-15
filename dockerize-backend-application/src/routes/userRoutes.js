import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);

export default router;
