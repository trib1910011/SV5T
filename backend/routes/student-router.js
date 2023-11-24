import express from "express";
import getStudentInfor from "../controllers/global/get-student-infor.js";
import registerForm from "../controllers/student-controllers/register-form.js";
import { showForm } from "../controllers/student-controllers/get-forms.js";
import getStandards from "../controllers/global/get-standard.js";
import {getForm} from "../controllers/global/get-form-id.js";
import searchForm from "../controllers/global/searchForm.js";
const router = express.Router();

router.post("/register-form",registerForm);

router.get("/get-form", showForm);

router.get("/get-form-id/:id", getForm);

router.get("/get-standard", getStandards);

router.post("/get-student-infor", getStudentInfor);

router.post("/search-form", searchForm)

export default router;
