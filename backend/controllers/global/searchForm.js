import FormDangky from "../../models/FormDangky";
const searchForm = async (req, res) => {
        try{
            const name = req.query.name;
            const username = req.query.username;
            const result = await FormDangky.find({
                                                    name:{ $regex: `${name}`, $options: 'i'},
                                                    username:{ $regex: `${username}`, $options: 'i'},
            });
            return res.status(200).json(result);
        }catch(error){
            return res.status(500).json(error);
        }
    }
export default searchForm;