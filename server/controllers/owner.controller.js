import Owner from "../models/owner.model.js"

export const createOwner = async (req, res) =>{
    try
    {
        const reqOwner = new Owner(req.body);
        const {email} = reqOwner;
        const ownerExists = await Owner.findOne({email});
        if ( ownerExists != null ) return res.status(400).json({error: "Owner already exists!"}); 
        await reqOwner.save();
        res.status(200).json({message: "Owner created successfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}
