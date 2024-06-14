import { createMainTicket, getAllMainTickets, getMainTicket, searchTicket, deleteTicket } from "../controllers/ticket.main.controller.js";
import express, { Router } from "express"

const route = express.Router();

route.post("/create-main-ticket", createMainTicket);
route.get("/get-all-main-tickets", getAllMainTickets);
route.get("/get-main-ticket/:_id", getMainTicket);
route.get("/search-ticket/:query", searchTicket);
route.delete("/delete-ticket/:_id", deleteTicket);

export default route;