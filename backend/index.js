import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import bodyParser from "body-parser";
import db from "./api/config/database.js";

import { UserRoutes,DokuRoutes } from "./api/routes";

// const db = require("./api/models");
// global.__basedir = __dirname;
dotenv.config();
const app = express();
const port = process.env.APP_PORT||8080;
const upload = multer();


try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:8027', optionsSuccessStatus: 200 }));
app.use(cookieParser());

// menghandle content application/json
app.use(bodyParser.json());
// menghandle content application/x-www
app.use(bodyParser.urlencoded({ extended: true }));
// menghandle content multipart/form-data
app.use(upload.array());
app.use(express.static("upload"));
// app.use(express.json());

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/dokumen", DokuRoutes);

app.listen(port,()=>{
    console.log(`Server up and running on Port : ${port}`);
});
