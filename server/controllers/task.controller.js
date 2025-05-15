import mongoose from "mongoose";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";


const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);


export const createTask = async (req, res) => {
  try {
    const {
      taskName,
      assignedTo, 
      dueDate,
      targetDate,
      endDate,
      taskDescription,
    } = req.body;

    // Validate required fields
    if (!taskName || !assignedTo || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "taskName, assignedTo and dueDate are required",
      });
    }

    // Verify that assignedTo user exists
    const user = await User.findById(assignedTo);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Assigned user not found",
      });
    }

    // Create task
    const newTask = new Task({
      taskName,
      assignedTo,
      dueDate,
      targetDate,
      endDate,
      taskDescription,
    });

    const savedTask = await newTask.save();

    res.status(201).json({ success: true, task: savedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create task", error: error.message });
  }
};


export const getallTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      // Admin gets all tasks
      tasks = await Task.find().populate("assignedTo", "username role");
    } else {
      // Non-admin gets tasks assigned to them only (by user id)
      tasks = await Task.find({ assignedTo: req.user._id }).populate("assignedTo", "username role");
    }

    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};


export const getTaskbyID = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid task ID" });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, task });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch task",
        error: error.message,
      });
  }
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid task ID" });
    }

    const {
      taskName,
      assignedTo,
      dueDate,
      targetDate,
      endDate,
      taskDescription,
    } = req.body;

  

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        taskName,
        assignedTo,
        dueDate,
        targetDate,
        endDate,
        taskDescription,
      },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, task: updatedTask });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update task",
        error: error.message,
      });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid task ID" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete task",
        error: error.message,
      });
  }
};
