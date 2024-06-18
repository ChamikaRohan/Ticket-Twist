import { createMainTicket, getAllMainTickets, getMainTicket, searchTicket, deleteMainTicket, deleteFullTicket, uploadFile } from "../controllers/ticket.main.controller.js";
import express, { Router } from "express"
import { initializeApp } from "firebase/app";
import fconfig from "../firebase/firebaseConfig.js"
import multer from "multer"

initializeApp(fconfig.firebaseConfig);
const uploadFileMulter = multer({ storage: multer.memoryStorage() })

const route = express.Router();

route.post("/create-main-ticket", createMainTicket);
route.get("/get-all-main-tickets", getAllMainTickets);
route.get("/get-main-ticket/:_id", getMainTicket);
route.get("/search-ticket/:query", searchTicket);
route.delete("/delete-main-ticket/:_id", deleteMainTicket);
route.delete("/delete-full-ticket/:_id", deleteFullTicket);
route.post("/create-ticketimg",uploadFileMulter.single('file'), uploadFile);

export default route;