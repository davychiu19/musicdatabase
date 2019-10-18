import express from "express";
import TestController from "../Controllers/TestController";

const router = express.Router();

router.route("/create").post(TestController.CreateDemoSchema);
router.route("/get").get(TestController.GetAll);

export default router;
