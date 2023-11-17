import express from "express";
import { createSpell } from "../controllers/spell-controllers/create-spell.js";
import updateCategory, {deleteCategory, createCategory, showCategory } from "../controllers/ministry-controllers/create-category.js";
import updateStandard, { createStandard, deleteStandard, showStandard, updateOneStandard } from "../controllers/ministry-controllers/create-standard.js";
import getCategories from "../controllers/ministry-controllers/get-category.js";
import getStandards from "../controllers/global/get-standard.js";
import getAllAccount from "../controllers/global/get-all-account.js";
import { showForm } from "../controllers/student-controllers/get-forms.js";
import {getForm} from "../controllers/global/get-form-id.js";
import getClass from "../controllers/global/get-class.js";
import { findForm } from "../controllers/global/findForm.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ministry");
});
router.post("/create-spell", createSpell);

router.post("/create-category", createCategory);

router.delete("/delete-category", deleteCategory);

router.patch("/update-category", updateCategory);

router.post("/create-standard", createStandard);

router.patch("/updateOneStandard/:id", updateOneStandard);

router.delete("/delete-standard", deleteStandard);

router.patch("/update-standard", updateStandard);

router.get("/get-all-categories", getCategories);

router.get("/get-all-category", showCategory);

router.get("/get-all-standard", showStandard);

router.get("/get-standard", getStandards);

router.get("/get-all-account", getAllAccount);

router.get("/get-form-id/:id", getForm);

router.get("/get-form", showForm);

router.get("/get-class", getClass)

router.post("/search-form",findForm )

export default router;
