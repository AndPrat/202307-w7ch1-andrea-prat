import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import { things } from "../../database/data.js";
import Thing from "../../database/models/Things.js";
import type ParamIdRequest from "../../types.js";

const getThings = async (req: Request, res: Response) => {
  const things = await Thing.find().exec();

  res.status(200).json({ things });
};

const getThingById = async (
  req: ParamIdRequest,
  res: Response,
  next: NextFunction,
) => {
  const { idThing } = req.params;
  const thing = await Thing.find(
    (thing: { id: number }) => thing.id === +idThing,
  ).exec();

  if (!res.status(200)) {
    next(new CustomError("Endpoint not found", 404));

    return;
  }

  res.status(200).json({ thing });
};

const deleteThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const getThingToId = things.findIndex((thing) => thing.id === +idThing);

  const updatedThings = things.splice(getThingToId, 1);

  res.status(200).json({ updatedThings });
};

export { deleteThingById, getThingById, getThings };
