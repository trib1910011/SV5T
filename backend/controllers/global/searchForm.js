import Account from "../../models/Account.js";
import FormDangky from "../../models/FormDangky.js";
const searchForm = async (req, res) => {
  try {
    const name = req.body.searchForm;
    const username = req.body.searchForm;
    const result = await FormDangky.find({
      $or: [
        { name: { $regex: `${name}`, $options: "i" } },
        { username: { $regex: `${username}`, $options: "i" } },
      ],
    });

    if (result) {
      let result_avatar = [];

      for (let item of result) {
        const data_get = await Account.findById({ _id: item.studentId });

        const avatarUrl = data_get.urlAvatar;
        result_avatar.push(avatarUrl);
      }

      const result_new = result.map((item, index) => {
        return {
          _id: item.studentId,
          username: item.username,
          name: item.name,
          urlAvatar: result_avatar[index],
          classStudent: item.classStudent,
          major: item.major,
          course: item.course,
          result: item.result,
          spellname: item.spellname,
          standard: item.standard,
          created: item.createdAt,
        }
      });

      return res.status(200).json(result_new);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export default searchForm;
