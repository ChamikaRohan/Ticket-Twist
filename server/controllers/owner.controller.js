import Owner from "../models/owner.model.js"
import bcryptjs from "bcryptjs"

export const signupOwner = async (req, res) =>{
    try
    {
        const {email} = req.body;
        const ownerExists = await Owner.findOne({email});
        if ( ownerExists != null ) return res.status(400).json({error: "Owner already exists!"}); 

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
    res.status(200).json({message: "working"});
}



