import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthYear: Number
});

export const Director = mongoose.model("Director", directorSchema);