import express from "express";
const router = express.Router();
import getStandards from "../controllers/global/get-standard.js";
import {showForm} from "../controllers/student-controllers/get-forms.js";
import {getForm} from "../controllers/global/get-form-id.js";
import { rateForm } from "../controllers/teacher-controllers/rate-form.js";

router.get("/get-standard", getStandards);

router.get("/get-form", showForm);

router.get("/get-form-id/:id", getForm);

router.patch("/update-form/:id", rateForm)

export default router;
