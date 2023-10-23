import mongoose from "mongoose";
const { Schema } = mongoose;

const spellSchema = new Schema({
    spellname: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
    },
    start: {
        type: String,
    },
    end: {
        type: String
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("Spell", spellSchema);