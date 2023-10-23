import Category from "../../models/CategoryStandard.js";


export const createCategory = async (req, res, next) => {
    const { categoryCode, categoryName } = req.body;
    if (!categoryCode || !categoryName ) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }
    try {
        const findCategory = await Category.findOne({ categoryCode });
        if (!findCategory) {
            const newCategory = await Category.create({
                categoryCode,
                categoryName,
            });
                return res.json({
                    status: true,
                    message: "Tạo mới tiêu chí thành công!",
                    newCategory,
                });
            }

            

            
        else {
            return res.json({
                status: false,
                message: "Tiêu chí đã tồn tại trong hệ thống!",
            });
        }
    } catch (error) {
        next(error);
    }

};

export const showCategory = async (req, res, next) => {
    try {
        const findCategory = await Category.find();
        if (findCategory) {
                return res.json({
                    status: true,
                    message: "Lấy tiêu chí thành công!",
                    findCategory,
                });
            }
    } catch (error) {
        console.log(error)
    }
}


export const deleteCategory = async  (req, res, next) => {
    const { categoryId } = req.body;
    if (categoryId) {
        try {
            const result = await Category.findOneAndDelete({
                _id: categoryId,
            });

            return res.json({
                status: true,
                message: "Xóa tiêu chí thành công!",
                result,
            });
        } catch (error) {
            console.log(error)
            next(error);
        }
    } else
        return res.json({
            status: false,
            message: "Không xác định được ID tiêu chí!",
        });
};
const updateCategory = async (req, res, next) => {
    const { categoryId, categoryCode, categoryName } = req.body;
    // simple validate
    if (!categoryCode || !categoryName) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }

    try {
        const result = await Category.findOneAndUpdate(
           { _id:categoryId},
            {
            categoryCode,
            categoryName}
        ,{new:true})
        if (result) {
            return res.json({
                status: true,
                message: "Cập nhật loại tiêu chí thành công!",
                result,
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy loại tiêu chí!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateCategory;



