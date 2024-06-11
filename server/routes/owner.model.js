import express from "express"
import { createOwner } from "../controllers/owner.controller.js";

const route = express.Router();

route.post("/create-owner", createOwner);

export default route;