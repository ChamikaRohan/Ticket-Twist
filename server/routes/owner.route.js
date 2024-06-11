import express from "express"
import { signupOwner, signinOwner } from "../controllers/owner.controller.js";

const route = express.Router();

route.post("/signup-owner", signupOwner);
route.get("/signin-owner", signinOwner);

export default route;