import express from "express"
import { signupOwner, signinOwner,auth, getOwner, uploadFile, updateOwner } from "../controllers/owner.controller.js";
import { cookieJwtAuth } from "../middlewares/cookieJwtAuth.js"
import { initializeApp } from "firebase/app";
import fconfig from "../firebase/firebaseConfig.js"
import multer from "multer"

initializeApp(fconfig.firebaseConfig);
const uploadFileMulter = multer({ storage: multer.memoryStorage() })

const route = express.Router();

route.post("/signup-owner", signupOwner);
route.post("/signin-owner", signinOwner);
route.post('/auth',cookieJwtAuth, auth);
route.post('/get-owner/:owner_id', getOwner);
route.post("/create-ownerimg",uploadFileMulter.single('file'), uploadFile);
route.post("/update-owner", cookieJwtAuth, updateOwner);

export default route;