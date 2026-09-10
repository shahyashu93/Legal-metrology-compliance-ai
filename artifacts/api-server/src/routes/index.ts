import { Router, type IRouter } from "express";
import healthRouter from "./health";
import extractionRouter from "./extraction";

const router: IRouter = Router();

router.use(healthRouter);
router.use(extractionRouter);

export default router;
