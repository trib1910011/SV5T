import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import MinistryAccount from "../../models/MinistryAccount.js";
import argon2 from "argon2";

const createAccount = async (req, res, next) => {
    const { username, password, name, typeAccount } = req.body;

    let urlAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    if (typeAccount == "STUDENT")
        urlAvatar = "https://cdn-icons-png.flaticon.com/512/2302/2302834.png";
    else if (typeAccount == "TEACHER")
        urlAvatar = "https://cdn-icons-png.flaticon.com/512/6854/6854607.png";
    else if (typeAccount == "MINISTRY")
        urlAvatar = "https://cdn-icons-png.flaticon.com/512/6854/6854607.png";

    // simple validate
    if (!username || !password || !name || !typeAccount) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }
    try {
        const findAccount = await Account.findOne({ username });
        if (!findAccount) {
            const hashedPassword = await argon2.hash(password);
            const newAccount = await Account.create({
                username,
                password: hashedPassword,
                name,
                urlAvatar,
                rule: typeAccount,
                createdAt: Date.now(),
            });

            if (typeAccount === "TEACHER") {
                const teacherAccount = await TeacherAccount.create({
                    teacherId: newAccount._id,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    teacherAccount,
                });
            }
            if (typeAccount === "STUDENT") {
                const { major, course } = req.body;
                const studentAccount = await StudentAccount.create({
                    studentId: newAccount._id,
                    major,
                    course,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    studentAccount,
                });
            }

            if (typeAccount === "MINISTRY") {
                const ministryAccount = await MinistryAccount.create({
                    ministryId: newAccount._id,
                });
                return res.json({
                    status: true,
                    message: "Tạo mới một tài khoản thành công!",
                    newAccount,
                    MinistryAccount,
                });
            }
        } else {
            return res.json({
                status: false,
                message: "Tài khoản đã tồn tại trong hệ thống!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default createAccount;
