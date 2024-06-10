import { createSecretTicket, getSecretTicket } from "../controllers/ticket.secret.controller.js";
import express from "express"

const route = express.Router();

route.post("/create-secret-ticket", createSecretTicket);
route.get("/get-secret-ticket/:secret_id", getSecretTicket);

export default route;