import mongoose from "mongoose"

const ownerSchema = mongoose.Schema({
    first_name:{
        required: true,
        type: String
    },
    last_name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String,
        unique: true
    },
    phone_number: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    tickets: {
        type: String
    }
}, {timestamps: true});

export default mongoose.model("owners", ownerSchema);