import Spell from "../../models/Spell.js";

const updateSpell = async (req, res, next) => {
    const { spellId, spellname, name, start, end,ratio } = req.body;
    // simple validate
    if (!spellname || !name || !start || !end) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }

    try {
        const result = await Spell.findOneAndUpdate(
           { _id:spellId},
            {
            spellname,
            name,
            start,
            end,
            ratio
        }
        ,{new:true})
        if (result) {
            return res.json({
                status: true,
                message: "Cập nhật đợt thành công!",
                result,
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy đợt!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateSpell;
