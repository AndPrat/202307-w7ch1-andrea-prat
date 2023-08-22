import { type Request } from "express";

type ParamIdRequest = Request<{ idThing: string }>;

export default ParamIdRequest;
