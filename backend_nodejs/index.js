import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
import newsRoutes from "./routes/newsRoutes.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));
mongoose.set('strictQuery', true);

app.get("/", (req, res) => {
    res.send("backend is working 👋");
});

app.use('/users',userRoutes);
app.use('/news',newsRoutes);

app.listen(process.env.PORT || 8000, async () => {
    console.log("Server has started");
    try {
      mongoose.connect(process.env.conn_str);
      console.log("Successfully Connected to db 🚀🚀");
    } catch (err) {
      console.log("❌❌Error during connection to database❌❌:", err);
    }
});