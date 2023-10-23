import express from "express";

import addCompanyController from "../controllers/other/add-company.js";

import assignTeacher from "../controllers/ministry-controllers/assign-teacher.js";
import getAllTeachers from "../controllers/ministry-controllers/get-all-teachers.js";
import getAllCompanies from "../controllers/ministry-controllers/get-all-companies.js";
import getInforTeacher from "../controllers/ministry-controllers/get-infor-teacher.js";
import getInforAssign from "../controllers/ministry-controllers/get-infor-assign.js";
import getStudentManaged from "../controllers/ministry-controllers/get-student-managed.js";
import { createSpell } from "../controllers/spell-controllers/create-spell.js";
import updateCategory, {deleteCategory, createCategory, showCategory } from "../controllers/ministry-controllers/create-category.js";
import updateStandard, { createStandard, deleteStandard, showStandard, updateOneStandard } from "../controllers/ministry-controllers/create-standard.js";
import getCategories from "../controllers/ministry-controllers/get-category.js";
import getStandards from "../controllers/global/get-standard.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ministry");
});

router.post(addCompanyController);

// Assign teacher
router.post("/assign-teacher", assignTeacher);

router.post("/create-spell", createSpell);

router.post("/create-category", createCategory);

router.delete("/delete-category", deleteCategory);

router.patch("/update-category", updateCategory);

router.post("/create-standard", createStandard);

router.patch("/updateOneStandard/:id", updateOneStandard);

router.delete("/delete-standard", deleteStandard);

router.patch("/update-standard", updateStandard);

router.get("/get-all-categories", getCategories);
// Get all teachers
router.get("/get-all-teachers", getAllTeachers);

// Get all companies
router.get("/get-all-companies", getAllCompanies);

router.get("/get-all-category", showCategory);

router.get("/get-all-standard", showStandard);

router.get("/get-standard", getStandards);

// Get detail infor teacher
router.get("/get-infor-teacher", getInforTeacher);

// Get infor assign teacher
router.get("/get-infor-assign", getInforAssign);

// Get student managed by teacher
router.get("/get-student-managed", getStudentManaged);

export default router;
