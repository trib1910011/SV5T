import mongoose from "mongoose";
const { Schema } = mongoose;

const categoryStandardSchema = new Schema({
    categoryCode: {
        type: String
    },
    categoryName: {
        type: String
    }
});

export default mongoose.model("Category", categoryStandardSchema);
