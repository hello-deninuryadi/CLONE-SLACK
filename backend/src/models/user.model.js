import mangose from "mongoose";

const userSchema = new mangose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,

    },
    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true}); 

export const User = mangose.model("User", userSchema);