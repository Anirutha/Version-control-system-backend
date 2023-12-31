import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { userRouter } from "./Routers/users.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/users",userRouter )
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`));