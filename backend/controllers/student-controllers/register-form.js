import FormDangky from "../../models/FormDangky.js";
import { ObjectId } from "mongodb";
const registerForm = async function (req, res, next) {
    const { studentId, username, name, classStudent, major, course, spellname, more, result, standard, count_check} =
        req.body;
    const createdAt = new Date()
    try {
        await FormDangky.create({
            studentId: ObjectId(studentId),
            username,
            name,
            classStudent,
            major,
            course,
            spellname,
            more, 
            result,
            standard,
            count_check, 
            createdAt
        });

        return res.json({
            status: true,
            message: "Đăng ký thành công!",
        });
    } catch (error) {
        next(error);
    }
};

export default registerForm;
