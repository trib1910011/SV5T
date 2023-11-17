import StudentAccount from "../../models/StudentAccount.js";

const getClass = async (req, res, next) => {
    try {
        const result = await StudentAccount.find({});
        return res.json({
            status: true,
            message: "Lấy thông tin lớp của tất cả sinh viên!",
            result,
        });
    } catch (error) {
        next(error);
    }
};
export default getClass;