import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getallTasks,
  getTaskbyID,
} from "../controllers/task.controller.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";


const taskRouter = express.Router();

// Only admin can create, edit, delete tasks
taskRouter.post("/create-task", protect, adminOnly, createTask);
taskRouter.put("/edit-task/:id", protect, adminOnly, editTask);
taskRouter.delete("/delete-task/:id", protect, adminOnly, deleteTask);

// Anyone logged in can get tasks, but if not admin only get assigned tasks
taskRouter.get("/getall-task", protect, getallTasks);
taskRouter.get("/get-task/:id", protect, getTaskbyID);

export default taskRouter;
