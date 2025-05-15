import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config({ path: "../.env" });
console.log("MONGO_URI:", process.env.MONGO_URI);

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Admin user
    const adminExists = await User.findOne({ username: "admin" });
    if (!adminExists) {
      await new User({
        username: "admin",
        password: "admin123",
        role: "admin",
      }).save();
      console.log("✅ Admin created: username=admin | password=admin123");
    } else {
      console.log("ℹ️ Admin already exists");
    }

    // Regular user
    const userExists = await User.findOne({ username: "user" });
    if (!userExists) {
      await new User({
        username: "user",
        password: "user123",
        role: "user",
      }).save();
      console.log("✅ User created: username=user | password=user123");
    } else {
      console.log("ℹ️ User already exists");
    }

    // Accounts user
    const accountsExists = await User.findOne({ username: "accounts" });
    if (!accountsExists) {
      await new User({
        username: "accounts",
        password: "accounts123",
        role: "accounts",
      }).save();
      console.log("✅ Accounts user created: username=accounts | password=accounts123");
    } else {
      console.log("ℹ️ Accounts user already exists");
    }

    // Dev user
    const devExists = await User.findOne({ username: "dev" });
    if (!devExists) {
      await new User({
        username: "dev",
        password: "dev123",
        role: "dev",
      }).save();
      console.log("✅ Dev user created: username=dev | password=dev123");
    } else {
      console.log("ℹ️ Dev user already exists");
    }

    // HR user
    const hrExists = await User.findOne({ username: "hr" });
    if (!hrExists) {
      await new User({
        username: "hr",
        password: "hr123",
        role: "hr",
      }).save();
      console.log("✅ HR user created: username=hr | password=hr123");
    } else {
      console.log("ℹ️ HR user already exists");
    }

  } catch (error) {
    console.error("❌ Error seeding users:", error.message);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
};

seedUsers();
