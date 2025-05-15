import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    enum: ["gst", "development", "hiring"],
    required: true,
    trim: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: "User",
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  targetDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  taskDescription: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
