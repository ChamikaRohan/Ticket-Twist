import mongoose from "mongoose"

const mainTicketSchema =  mongoose.Schema({
    ticket_id: {
        required: true,
        type: String,
        unique: true
    },
    name :{
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    location: {
        required: "true",
        type: String
    },
    validity_date: {
        required: true,
        type: Date
    },
    price_lkr: {
        required: true,
        type: String
    },
    seat_number: {
        type: String
    },
    section: {
        type: String
    },
    ticket_type: {
        type: String
    },
    special_instructions: {
        type: String
    }
})

export default mongoose.model("maintickets", mainTicketSchema);