import { createMainTicket } from "../controllers/ticket.main.controller.js";
import express, { Router } from "express"

const route = express.Router();

route.post("/create-main-ticket", createMainTicket);

export default route;