import Category from "../../models/CategoryStandard.js";

const getCategories = async function (req, res, next) {

    try {
        const categories = await Category.find();
        return res.status(201).json({
   
            categories
        });
    } catch (error) {
        console.log(error);
    }
};

export default getCategories;
