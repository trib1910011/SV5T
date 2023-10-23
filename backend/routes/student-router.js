import express from "express";

import getAllCompanies from "../controllers/ministry-controllers/get-all-companies.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import registerCompany from "../controllers/student-controllers/register-company.js";
import getStudentInfor from "../controllers/global/get-student-infor.js";
import getCompanyInfor from "../controllers/global/get-company-infor.js";
import getCompanyAssess from "../controllers/global/get-company-assess.js";
import getTeacherAssess from "../controllers/global/get-teacher-assess.js";
import registerForm from "../controllers/student-controllers/register-form.js";
import { showForm } from "../controllers/student-controllers/get-forms.js";
import getStandards from "../controllers/global/get-standard.js";
import {getForm} from "../controllers/global/get-form-id.js";
const router = express.Router();

//GET All Company
router.get("/get-company-list", getAllCompanies);

//Get Result InternShip

router.get("/get-student-infor", getStudentInfor);

router.get("/get-company-infor", getCompanyInfor);

router.get("/get-all-task", getAllTasks);

router.get("/get-company-assess", getCompanyAssess);

router.get("/get-assess", getTeacherAssess);

router.post("/register-company", registerCompany);

router.post("/register-form",registerForm);

router.get("/get-form", showForm);

router.get("/get-form-id/:id", getForm);

router.get("/get-standard", getStandards);

router.post("/get-student-infor", getStudentInfor)
// Get teacher assess
router.get("/get-teacher-assess", getTeacherAssess);

export default router;
