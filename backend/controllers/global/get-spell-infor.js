
import Spell from "../../models/Spell.js";

const getSpells = async function (req, res, next) {
    try {
        const spells = await Spell.find({});
        const result = [];

        for (let spell of spells) {
            let detail = await Spell.findOne({ _id: spell.spellId });

            detail = {
                spell,
                detail,
            };

            result.push(detail);
        }

        return res.status(201).json({
            success: "OK",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getSpells;
