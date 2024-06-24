import MainTicket from "../models/ticket.main.model.js"
import { deleteSecretTicket } from "./ticket.secret.controller.js"
import SecretTicket from "../models/ticket.secret.model.js"
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import fconfig from "../firebase/firebaseConfig.js"

initializeApp(fconfig.firebaseConfig);
const storage = getStorage();


export const createMainTicket = async(req, res) =>{
    try
    {
        const reqMainTicket = new MainTicket(req.body);
        const ticket_id = reqMainTicket["ticket_id"];
        const ticketExists = await MainTicket.findOne({ticket_id});
        if ( ticketExists != null ) return res.status(400).json({error: "Ticket already added to the system!"});
        const ticket = await reqMainTicket.save();
        res.status(201).json({message: "Ticket saved successfully!", id: ticket._id});
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
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
        res.status(500).json({error: "Internal server error!"});
    }
}

export const getMainTicket = async(req, res) =>{
    try
    {
        const {_id} = req.params;
        const mainTicket = await MainTicket.findOne({_id});
        if ( mainTicket == null ) return res.status(400).json({error: "Requested main ticket cannot be found!"});
        res.status(200).json(mainTicket);    
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}

export const searchTicket = async(req, res)=>
{
    try
    {
        const paramsData = req.params;
        const query = paramsData.query;
        const tickets = await MainTicket.find({
            $or:[{name: new RegExp(query, 'i')},
                {category: new RegExp(query, 'i')}]});
        res.status(200).json(tickets);
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}

export const deleteMainTicket = async(req, res)=>{
    try
    {
        const paramsData = req.params;
        const {_id} = paramsData;
        const mainTicketExists = await MainTicket.findOne({_id});
        if ( mainTicketExists == null ) return res.status(400).json({error: "Requested main ticket cannot be found!"});
        await MainTicket.findByIdAndDelete(_id);
        res.status(200).json({message: "Main ticket deleted sucessfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Main ticket deletion unsucessfull!!"});
    }
}

export const deleteFullTicket = async(req, res)=>{
    try
    {
        const paramsData = req.params;
        const {_id} = paramsData;
        const mainTicketExists = await MainTicket.findOne({_id});
        if ( mainTicketExists == null ) return res.status(400).json({error: "Requested main ticket cannot be found!"});

        const secret_id = _id;
        const secretTicketExists = await SecretTicket.findOne({secret_id});
        if ( secretTicketExists == null ) return res.status(400).json({error: "Requested secret ticket cannot be found!"});
        
        await SecretTicket.findOneAndDelete(secret_id);
        await MainTicket.findByIdAndDelete(_id);

        res.status(200).json({message: "Full ticket deleted sucessfully!"});
    }
    catch(error)
    {
        res.status(500).json({error: "Full ticket deletion unsucessfull!!"});
    }
}

export const uploadFile = async (req, res) => {
    try {
      const currentDateTime = new Date();
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
  
      const storageRef = ref(storage, `images/${req.file.originalname}+${currentDateTime}`);
      const metadata = {
        contentType: req.file.mimetype,
      };
  
      const uploadTask = uploadBytesResumable(storageRef, req.file.buffer, metadata);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress
        },
        (error) => {
          res.status(500).json({ error: error.message });
        },
        async () => {
          // Upload completed successfully, get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          res.status(200).json({ message: "File uploaded successfully!", downloadURL });
        }
      );
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}


export const getTicketsByCategory = async(req, res) =>{
    try
    {
        const {category} = req.params;
        const ticketsByCategory = await MainTicket.find({category});
        res.status(200).json(ticketsByCategory);    
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error!"});
    }
}