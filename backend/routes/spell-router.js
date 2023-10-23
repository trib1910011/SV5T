import express from "express";
import {createSpell, showSpell, updateOneSpell} from "../controllers/spell-controllers/create-spell.js";
import deleteSpell from "../controllers/spell-controllers/delete-spell.js";
import updateSpell from "../controllers/spell-controllers/update-spell.js";
// import getSpellInfor from "../controllers/global/get-spell-infor.js";
// import deleteAccount from "../controllers/admin-controllers/delete-account.js";
// import getAllAccount from "../controllers/admin-controllers/get-all-account.js";
// import updateAccount from "../controllers/admin-controllers/update-account.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Spell");
});

//Get All Spell
router.get("/get-all-spell", showSpell);

//Create New Account
router.post("/create-spell", createSpell);


//Update one field Spell
router.patch("/updateOneSpell/:id", updateOneSpell);

//Delete Spell
router.delete("/delete-spell", deleteSpell);

//Update Spell
router.patch("/update-spell", updateSpell);


export default router;
