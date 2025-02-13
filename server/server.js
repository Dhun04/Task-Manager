require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model("User", UserSchema);

// Task Schema
const TaskSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    priority: String,
    dueDate: Date,
    wantAlarm: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

// Register Route
app.post("/api/register", async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ error: "User already exists!" });
    }
});

// Login Route
app.post("/api/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials!" });
        }
        const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });
        res.json({ message: "Login successful!", token });
    } catch (error) {
        res.status(500).json({ error: "Server error!" });
    }
});

// Add Task Route
app.post("/api/add-task", async(req, res) => {
    try {
        const { userId, title, description, priority, dueDate, wantAlarm } = req.body;
        const newTask = await Task.create({ userId, title, description, priority, dueDate, wantAlarm });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to add task" });
    }
});

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));