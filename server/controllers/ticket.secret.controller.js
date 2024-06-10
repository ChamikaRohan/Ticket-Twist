import SecretTicket from "../models/ticket.secret.model.js"

export const createSecretTicket = async(req, res) =>{
    try
    {
        const reqSecretTicket = new SecretTicket(req.body);
        const secret_id = reqSecretTicket["secret_id"];
        const ticketExists = await SecretTicket.findOne({secret_id});
        if ( ticketExists != null ) return res.status(400).json({error: "Ticket secrets already added to the system!"});
        reqSecretTicket.save();
        res.status(201).json({message: "Ticket secrets saved successfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"})
    }
}