import mongoose from "mongoose";
const { Schema } = mongoose;

const studentAccountSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    classStudent: {
        type: String,
    },
    major: {
        type: String,
    },
    course: {
        type: String,
    },
});

export default mongoose.model("StudentAccount", studentAccountSchema);
