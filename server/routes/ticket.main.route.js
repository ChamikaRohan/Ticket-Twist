import { createMainTicket, getAllMainTickets } from "../controllers/ticket.main.controller.js";
import express, { Router } from "express"

const route = express.Router();

route.post("/create-main-ticket", createMainTicket);
route.get("/get-all-main-tickets", getAllMainTickets);

export default route;