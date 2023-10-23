import Spell from "../../models/Spell.js";
const deleteSpell = async function (req, res, next) {
    const { spellId } = req.body;
    if (spellId) {
        try {
            const result = await Spell.findOneAndDelete({
                _id: spellId,
            });

            return res.json({
                status: true,
                message: "Xóa đợt thành công!",
                result,
            });
        } catch (error) {
            next(error);
        }
    } else
        return res.json({
            status: false,
            message: "Không xác định được ID đợt!",
        });
};

export default deleteSpell;
