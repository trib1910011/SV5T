import FormDangky from "../../models/FormDangky.js";

export const findForm = async (req, res) => {
  const body_input = req.body;

  console.log(body_input)

  const Form = await FormDangky.find({
    major: body_input.spell_filter,
    course: body_input.course_filter,
    spellname: body_input.major_filter,
    classStudent: body_input.classStudent_filter,
  });

  Form ? res.status(201).json(Form) : res.status(501).json("Error");
};
