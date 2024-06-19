import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mainTicketRouter from "./routes/ticket.main.route.js"
import secretTicketRouter from "./routes/ticket.secret.route.js"
import ownerRouter from "./routes/owner.route.js"

const corsOptions = {
    origin: process.env.CLIENT_URL, 
    credentials: true 
  };

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;

app.listen(PORT, ()=>{
    return console.log(`Listening from port: ${PORT}`)
})

mongoose.connect(DB_URL)
    .then(()=>{console.log("Database connected successfully!");})
    .catch((error)=>{console.log("Database connected failed! \n",error.message);})

app.use("/api/main-ticket", mainTicketRouter);
app.use("/api/secret-ticket", secretTicketRouter);
app.use("/api/owner", ownerRouter);