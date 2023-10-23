import mongoose from "mongoose";

const { Schema } = mongoose;

const ministryAccountSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
});

export default mongoose.model("MinistryAccount", ministryAccountSchema);