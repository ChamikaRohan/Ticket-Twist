import Owner from "../models/owner.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

export const signupOwner = async (req, res) =>{
    try
    {
        const {email, phone_number} = req.body;
        const ownerExistsMail = await Owner.findOne({email});
        if ( ownerExistsMail != null ) return res.status(400).json({error: "Owner(email) already exists!"});
        
        const ownerExistsNum = await Owner.findOne({phone_number});
        if ( ownerExistsNum != null ) return res.status(400).json({error: "Owner(phone number) already exists!"}); 

        const {password} = req.body;
        const hashshedPassword = bcryptjs.hashSync(password, 10);
        const owner = new Owner({...req.body, password: hashshedPassword});
        await owner.save();
        res.status(200).json({message: "Owner created successfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}

export const signinOwner = async(req, res) =>{
    try
    {
        const reqData = req.body;
        const {email} = reqData;
        const {phone_number} = reqData;
        const {password} = reqData;

        if ( email == undefined )
        {
            const userExists = await Owner.findOne({phone_number});
            if (userExists == null) return res.status(400).json({error: "Unautherized, Please Sign Up!"});
            const validPassword = bcryptjs.compareSync(password, userExists["password"]);
            if (validPassword == false) return res.status(401).json({error: "Invalid credentials!"});
            const token = jwt.sign({id: userExists["_id"]}, process.env.JWT_SECRET);
            const {password: pass, ...rest} = userExists.toObject();
            res.cookie("access_token", token, {httpOnly: true, secure: true}).status(200).json(rest);
        }
        else
        {
            const userExists = await Owner.findOne({email});
            if (userExists == null) return res.status(400).json({error: "Unautherized, Please Sign Up!"});
            const validPassword = bcryptjs.compareSync(password, userExists["password"]);
            if (validPassword == false) return res.status(401).json({error: "Invalid credentials!"});
            const token = jwt.sign({id: userExists["_id"]}, process.env.JWT_SECRET);
            const {password: pass, ...rest} = userExists.toObject();
            res.cookie("access_token", token, {httpOnly: true, secure: true}).status(200).json(rest);
        }
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}

export const auth = async (req, res) =>{
    res.status(200).json({user: true});
}

export const getOwner = async (req, res) =>{
    try
    {
        const _id = req.params.owner_id;
        const owner = await Owner.findOne({_id});
        if (owner == null) return res.status(400).json({error: "Unautherized owner, ticket is not valid!"});
        res.status(200).json({owner});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}
