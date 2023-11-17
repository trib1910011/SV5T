import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const getStudentInfor = async (req, res, next) => {
const {token} = req.body

  // decoded is username
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const user = 
      await Account.findOne({
          username: decoded,
      });
  if(user){
      var {_id} = user;
      const id_input = _id 
      
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ _id: id_input });
      

    const studentAccount = await StudentAccount.findOne({
      studentId: id_input,
    });
    
    const result = {
      studentId: id_input,
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      classStudent: studentAccount.classStudent,
      major: studentAccount.major,
      course: studentAccount.course,
    };

    return res.json({
      status: true,
      message: "Lấy thông tin sinh viên thành công!",
      result,
    });
  } catch (error) {console.log(error)
    next(error);
  }
  }

  
};
export default getStudentInfor;
