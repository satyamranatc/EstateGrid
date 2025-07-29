import { Router } from "express";
import {
  getAllStates,
  getStateById,
  addState,
  updateState,
  deleteState,
} from "../Controllers/State.controller.js";


let router = Router();

router.get("/list",getAllStates);
router.get("/:stateId",getStateById);
router.post("/addState",addState);
router.put("/updateState/:stateId",updateState);
router.delete("/deleteState/:stateId",deleteState);

export default router;
