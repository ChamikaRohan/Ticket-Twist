import express from "express"
import { signupOwner } from "../controllers/owner.controller.js";

const route = express.Router();

route.post("/signup-owner", signupOwner);

export default route;