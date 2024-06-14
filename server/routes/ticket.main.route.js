import { createMainTicket, getAllMainTickets, getMainTicket, searchTicket, deleteMainTicket, deleteFullTicket } from "../controllers/ticket.main.controller.js";
import express, { Router } from "express"

const route = express.Router();

route.post("/create-main-ticket", createMainTicket);
route.get("/get-all-main-tickets", getAllMainTickets);
route.get("/get-main-ticket/:_id", getMainTicket);
route.get("/search-ticket/:query", searchTicket);
route.delete("/delete-main-ticket/:_id", deleteMainTicket);
route.delete("/delete-full-ticket/:_id", deleteFullTicket);

export default route;