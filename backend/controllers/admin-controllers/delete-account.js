import Account from "../../models/Account.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import MinistryAccount from "../../models/MinistryAccount.js";
import FormRegister from "../../models/FormRegister.js";
import StudentAccount from "../../models/StudentAccount.js";
import Task from "../../models/Task.js";
import TeacherAccess from "../../models/TeacherAccess.js";
import { ObjectId } from "mongodb";

const deleteAccount = async (req, res, next) => {
    const { accountId } = req.body;
    try {
        const accountDeleted = await Account.findOneAndDelete({
            _id: ObjectId(accountId),
        });

        if (accountDeleted) {
            const rule = accountDeleted.rule;
            if (rule === "TEACHER") {
                await TeacherAccount.findOneAndDelete({
                    teacherId: accountDeleted._id,
                });
            }


            if (rule === "STUDENT") {
                await StudentAccount.findOneAndDelete({
                    studentId: accountDeleted._id,
                });
            }
            if (rule === "MINISTRY") {
                await MinistryAccount.findOneAndDelete({
                    ministryId: accountDeleted._id,
                });
            }
            return res.json({
                status: true,
                message: "Xóa tài khoản thành công!",
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy tài khoản để xóa!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default deleteAccount;
