import express from "express";
import { getThingById, getThings } from "../controllers/thingsControllers.js";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getThingById);

export default thingsRouter;
