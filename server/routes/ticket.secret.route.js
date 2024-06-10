import { createSecretTicket } from "../controllers/ticket.secret.controller.js";
import express from "express"

const route = express.Router();

route.post("/create-secret-ticket", createSecretTicket);

export default route;