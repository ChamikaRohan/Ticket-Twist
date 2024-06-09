import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;

app.listen(PORT, ()=>{
    return console.log(`Listening from port: ${PORT}`)
})

mongoose.connect(DB_URL)
    .then(()=>{console.log("Database connected successfully!");})
    .catch((error)=>{console.log("Database connected failed! \n",error.message);})