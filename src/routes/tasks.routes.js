import express from "express";
import { getTasks, postTask } from "../controllers/tasks.controller.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", postTask);

export default router;