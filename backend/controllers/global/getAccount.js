import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import jwt from "jsonwebtoken";

const getAccount = async function (req, res, next) {

    const authHeader = req.body.headers.Authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.json({ status: false, message: "Token not found!" });
    }

    try {
        // decoded is username
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = 
            await Account.findOne({
                username: decoded,
            });
        if(user){
            var {_id, username, email, phoneNumber, name, urlAvatar, rule} = user; 
        }
        const student = 
            await StudentAccount.findOne({studentId: _id});
        const account = {
            id: _id,
            username,
            name,
            email,
            phoneNumber,
            urlAvatar,
            rule,
            major: student?.major || null,
            course: student?.course || null
        };

        return res.json({
            status: true,
            message: "Get account successfully!",
            result: account,
        });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Invalid token!" });
    }
};

// export async function getStudentAccount(req, res, next) {
//     const {_id, username, email, phoneNumbername, urlAvatar,  rule} = req.user;
//     const student = 
//             await StudentAccount.findOne({studentId: _id});
//         const account = {
//             id: _id,
//             username,
//             name,
//             email,
//             phoneNumber,
//             urlAvatar,
//             rule,
//             major: student.major || null,
//             course: student.course || null
//         };

//         return res.json({
//             status: true,
//             message: "Get account successfully!",
//             result: account,
//         });
// }

export default getAccount;
