import { createSecretTicket, deleteSecretTicket, getSecretTicket } from "../controllers/ticket.secret.controller.js";
import express from "express"

const route = express.Router();

route.post("/create-secret-ticket", createSecretTicket);
route.get("/get-secret-ticket/:secret_id", getSecretTicket);
route.delete("/delete-secret-ticket/:secret_id", deleteSecretTicket);

export default route;