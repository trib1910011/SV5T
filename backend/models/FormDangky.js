import mongoose from "mongoose";
const { Schema } = mongoose;

const formDangkySchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    username: {
        type: String
    },
    name: {
        type: String
    },
    classStudent: {
        type: String
    },
    major: {
        type: String
    },
    course: {
        type: String
    },
    spellname: {
        type: String,
    },
    gpa: {
        type: Number,
        required: true,
    },
    drl: {
        type: Number,
        required: true,
    },
    standard: {
        type: Array,
        of: String,
        default: []
    },
    more: {
        type: String,
        default: null
    },
    result: {
        type: String,
        default: "Đang xử lý"
    },
    count_check: {
        type: Array,
        of: String,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date(),
    },
});

export default mongoose.model("FormDangky", formDangkySchema);
