import MainTicket from "../models/ticket.main.model.js"

export const createMainTicket = async(req, res) =>{
    try
    {
        const reqMainTicket = new MainTicket(req.body);
        const ticket_id = reqMainTicket["ticket_id"];
        const ticketExists = await MainTicket.findOne({ticket_id});
        if ( ticketExists != null ) return res.status(400).json({error: "Ticket already added to the system!"});
        reqMainTicket.save();
        res.status(201).json({message: "Ticket saved successfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"})
    }
}

export const getAllMainTickets = async(req, res) => {
    try
    {
        const allMainTickets = await MainTicket.find();
        res.status(200).json(allMainTickets);
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"})
    }
}