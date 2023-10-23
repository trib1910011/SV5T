import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherAccountSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
});

export default mongoose.model("TeacherAccount", teacherAccountSchema);
