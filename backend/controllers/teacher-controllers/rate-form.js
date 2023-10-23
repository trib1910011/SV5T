import FormDangky from '../../models/FormDangky.js'

export const rateForm = async (req, res, next) => {
    try {
        const dataForm = await FormDangky.findById(req.params.id)
            dataForm.count_check.push(req.body.check)
        const findForm = await FormDangky.findByIdAndUpdate(req.params.id,{
            count_check: dataForm.count_check
        });
  
        if (findForm) {
                return res.json({
                    status: true,
                    message: "Đánh giá thành công!",
                    findForm,
                });
            }
    } catch (error) {
        console.log(error)
    }
}