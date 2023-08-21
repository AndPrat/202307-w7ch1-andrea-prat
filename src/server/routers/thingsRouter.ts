import express from "express";
import getThings from "../controllers/thingsControllers.js";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
export default thingsRouter;
