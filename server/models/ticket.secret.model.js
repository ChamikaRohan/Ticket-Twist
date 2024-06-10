import mongoose from "mongoose"

const secretTicketSchema = mongoose.Schema({
    secret_id: {
        type: String,
        required: true
    },
    barcode: {
        type: String
    },
    qrcode: {
        type: String
    },
    validation_code: {
        type: String,
        required: true
    }
})

export default mongoose.model("secrettickets", secretTicketSchema);