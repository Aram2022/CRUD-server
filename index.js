import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud_database", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
