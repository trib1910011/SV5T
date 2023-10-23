import Standard from "../../models/Standard.js";


export const createStandard = async (req, res, next) => {
    const { categoryName, codeStandard, contentStandard, check, status } = req.body;
    // const categoryName = await Category.findOne({_id: categoryId})
    if (!codeStandard || !contentStandard ) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }
    try {
        const findStandard = await Standard.findOne({ codeStandard });
        if (!findStandard) {
            const newStandard = await Standard.create({
                codeStandard,
                categoryName,
                contentStandard,
                check,
                status,
            });
                return res.json({
                    status: true,
                    message: "Tạo mới tiêu chí thành công!",
                    newStandard,
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
export const showStandard = async (req, res, next) => {
    try {
        const findStandard = await Standard.find();
        if (findStandard) {
                return res.json({
                    status: true,
                    message: "Lấy tiêu chí thành công!",
                    findStandard,
                });
            }
    } catch (error) {
        console.log(error)
    }
}

export const updateOneStandard = async (req, res, next) => {
    try {
        const check_status = await Standard.updateOne({_id: req.params.id}, req.body, {new: true})
        if (check_status) {
                return res.json({
                    status: true,
                    message: "Chuyển trạng thái thành công!",
                    check_status,
                });
            }
    } catch (error) {
        console.log(error)
    }
}
export const deleteStandard = async  (req, res, next) => {
    const { standardId } = req.body;
    if (standardId) {
        try {
            const result = await Standard.findOneAndDelete({
                _id: standardId,
            });

            return res.json({
                status: true,
                message: "Xóa chi tiết tiêu chí thành công!",
                result,
            });
        } catch (error) {
            console.log(error)
            next(error);
        }
    } else
        return res.json({
            status: false,
            message: "Không xác định được ID chi tiết tiêu chí!",
        });
};
const updateStandard = async (req, res, next) => {
    const { standardId, codeStandard, categoryName, contentStandard } = req.body;
    // simple validate
    if (!codeStandard || !categoryName || !contentStandard) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }

    try {
        const result = await Standard.findOneAndUpdate(
           { _id:standardId},
            {
            codeStandard,
            categoryName,
            contentStandard,
        }
        ,{new:true})
        if (result) {
            return res.json({
                status: true,
                message: "Cập nhật chi tiết tiêu chí thành công!",
                result,
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy chi tiết tiêu chí!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateStandard;