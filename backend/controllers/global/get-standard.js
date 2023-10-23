import Standard from "../../models/Standard.js";

const getStandards = async function (req, res, next) {

    try {
        const standards = await Standard.find();
        return res.status(201).json({
            standards
        });
    } catch (error) {
        console.log(error);
    }
};
export default getStandards;
