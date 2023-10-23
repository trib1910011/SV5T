import mongoose from "mongoose";
const { Schema } = mongoose;

const standardSchema = new Schema({
    codeStandard: {
        type: String
    },
    categoryName: {
        type: String,
    },
    contentStandard: {
        type: String
    },
    check: {
        type: Boolean,
        default: false,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

export default mongoose.model("Standard", standardSchema);
