import Spell from '../../models/Spell.js'

export const getSpell = async (req, res, next) => {
        req.params.id;
    try {
        const findSpell = await Spell.findById(req.params.id);
        if (findSpell) {
                return res.json({
                    status: true,
                    message: "Lấy đợt theo id thành công!",
                    findSpell,
                });
            }
    } catch (error) {
        console.log(error)
    }
}