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
    password:{
        required: true,
        type: String,
    },
    phone_number: {
        required: true,
        type: String,
        unique: true
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