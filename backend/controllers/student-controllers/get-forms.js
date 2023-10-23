import FormDangky from '../../models/FormDangky.js'
import Account from "../../models/Account.js"

export const showForm = async (req, res, next) => {
    try {
        const findForm = await FormDangky.find();


        const arr = await Promise.all(findForm.map(async(item, index)=>{
              const data = await Account.findById(item.studentId)
                item.studentId = data
            return item
        }))

        if (findForm) {
                return res.json({
                    status: true,
                    message: "Lấy đơn thành công!",
                    arr,
                });
            }
    } catch (error) {
        console.log(error)
    }
}