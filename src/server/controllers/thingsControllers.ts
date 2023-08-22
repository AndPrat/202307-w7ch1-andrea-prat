import { type Request, type Response } from "express";
import { things } from "../../data/data.js";
import type ParamIdRequest from "../../types.js";

const getThings = (_req: Request, res: Response) => {
  res.status(200).json({ things });
};

const getThingById = (req: ParamIdRequest, res: Response) => {
  const { idThing } = req.params;
  const getThingToId = things.find((thing) => thing.id === +idThing);

  res.status(200).json({ getThingToId });
};

const deleteThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const getThingToId = things.findIndex((thing) => thing.id === +idThing);

  const updatedThings = things.splice(getThingToId, 1);

  res.status(200).json({ updatedThings });
};

export { deleteThingById, getThingById, getThings };
