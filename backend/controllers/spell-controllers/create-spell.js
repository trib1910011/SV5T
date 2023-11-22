import Spell from "../../models/Spell.js";


export const createSpell = async (req, res, next) => {
    const { spellname, name, start, end, status, allocate, structure,ratio } = req.body;
    if (!spellname || !name || !start || !end ) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }
    try {
        const findSpell = await Spell.findOne({ spellname });
        if (!findSpell) {
            const newSpell = await Spell.create({
                spellname,
                name,
                start,
                end,
                status,
                allocate,
                ratio,
                structure,
                createdAt: Date.now(),
            });
                return res.json({
                    status: true,
                    message: "Tạo mới đợt thành công!",
                    newSpell,
                });
            }

            

            
        else {
            return res.json({
                status: false,
                message: "Đợt đã tồn tại trong hệ thống!",
            });
        }
    } catch (error) {
        next(error);
    }

};

export const showSpell = async (req, res, next) => {
    try {
        const findSpell = await Spell.find();
        if (findSpell) {
                return res.json({
                    status: true,
                    message: "Lấy đợt thành công!",
                    findSpell,
                });
            }
    } catch (error) {
        console.log(error)
    }
}
export const updateOneSpell = async (req, res, next) => {
    try {
        const check_status = await Spell.updateOne({_id: req.params.id}, req.body, {new: true})
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



