import express from "express"
import { signupOwner, signinOwner,auth } from "../controllers/owner.controller.js";
import { cookieJwtAuth } from "../middlewares/cookieJwtAuth.js"

const route = express.Router();

route.post("/signup-owner", signupOwner);
route.post("/signin-owner", signinOwner);
route.post('/auth',cookieJwtAuth, auth);

export default route;