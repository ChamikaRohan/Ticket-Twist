import express from "express"
import { signupOwner, signinOwner,auth, getOwner } from "../controllers/owner.controller.js";
import { cookieJwtAuth } from "../middlewares/cookieJwtAuth.js"

const route = express.Router();

route.post("/signup-owner", signupOwner);
route.post("/signin-owner", signinOwner);
route.post('/auth',cookieJwtAuth, auth);
route.post('/get-owner/:owner_id', getOwner);

export default route;