import FormDangky from '../../models/FormDangky.js';
import Spell from '../../models/Spell.js';

export const rateForm = async (req, res, next) => {
    try {
        const dataForm = await FormDangky.findById(req.params.id)
            dataForm.count_check.push(req.body.check)
        //Xử lý spell
        const dataSpell = await Spell.findOne({name:dataForm.spellname})
            const arr_count_check =  []
            dataForm.count_check.forEach((item1) => {
                if (item1.split("-")[1] == "Đạt") {
                    arr_count_check.push(item1)
                }
            })

            let status_check = ""
            if (dataForm.count_check.length != dataSpell.allocate.length) {
                status_check = "Đang xử lý"
            } else if (dataForm.count_check.length == dataSpell.allocate.length) {
                if ((arr_count_check.length / dataSpell.allocate.length) * 100 >= dataSpell.ratio) {
                    status_check = "Đạt"
                } else if ((arr_count_check.length / dataSpell.allocate.length) * 100 < dataSpell.ratio) {
                    status_check = "Chưa đạt"
                }
            }



        const findForm = await FormDangky.findByIdAndUpdate(req.params.id,{
            result: status_check,
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