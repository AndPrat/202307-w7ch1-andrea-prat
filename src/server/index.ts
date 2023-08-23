import express from "express";
import morgan from "morgan";
import { endpointNotFound, generalErrorHandler } from "./middlewares/errors.js";
import thingsRouter from "./routers/thingsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
