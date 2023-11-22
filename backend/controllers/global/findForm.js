import FormDangky from "../../models/FormDangky.js";
import Account from "../../models/Account.js";
export const findForm = async (req, res) => {
  const body_input = req.body;

  const Form = await FormDangky.find({
    spellname: body_input.spell_filter,
    course: body_input.course_filter,
    major: body_input.major_filter,
    classStudent: body_input.classStudent_filter,
  });
  
  for (let item of Form) {
    const studentInfo = await Account.findOne({ _id: item.studentId });

    item.name = studentInfo.name,
    item.username = studentInfo.username

  }
  Form ? res.status(201).json(Form) : res.status(501).json("Error");
};
