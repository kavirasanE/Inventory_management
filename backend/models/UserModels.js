import mongoose from "mongoose";

const userSchema = mongoose.Schema (
    {
        Name: {
            type: String,
            required: true,            
        },
        Email: {
            type: String,
            required: true,
        },
        Password: {
            type: Number,
            required: true,
        }
    },
);

export const UserList = mongoose.model('user',userSchema); 