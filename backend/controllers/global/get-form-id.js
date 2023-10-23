import FormDangky from '../../models/FormDangky.js'

export const getForm = async (req, res, next) => {
        req.params.id;
    try {
        const findForm = await FormDangky.findById(req.params.id);
  
        if (findForm) {
                return res.json({
                    status: true,
                    message: "Lấy đơn theo id thành công!",
                    findForm,
                });
            }
    } catch (error) {
        console.log(error)
    }
}