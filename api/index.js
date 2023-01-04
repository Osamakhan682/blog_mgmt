import express from "express";
import mysql from "mysql";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
const corsConfig = {
    credentials: true,
    origin: "*",
    exposedHeaders:["Authorization"],
};
app.use(cors(corsConfig))
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/posts", postRoutes)

var listener = app.listen(8800, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});