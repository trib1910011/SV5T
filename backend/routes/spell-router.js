import express from "express";
import {createSpell, showSpell, updateOneSpell} from "../controllers/spell-controllers/create-spell.js";
import deleteSpell from "../controllers/spell-controllers/delete-spell.js";
import updateSpell from "../controllers/spell-controllers/update-spell.js";
import { getSpell } from "../controllers/spell-controllers/get-spell-id.js";


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

router.get("/get-spell-id/:id", getSpell);

export default router;
