import FormDangky from "../../models/FormDangky.js";
const searchbyMinistry = async (req, res) => {
  try {
    const name = req.body.searchForm;
    const username = req.body.searchForm;
    const result = await FormDangky.find({
      $or: [
        { name: { $regex: `${name}`, $options: "i" } },
        { username: { $regex: `${username}`, $options: "i" } },
      ],
    });

    return res.status(200).json(result);
        }catch(error){
            return res.status(500).json(error);
        }
};
export default searchbyMinistry;
