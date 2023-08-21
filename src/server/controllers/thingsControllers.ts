import { type Request, type Response } from "express";
import { things } from "../../data/data.js";

const getThings = (_req: Request, res: Response) => {
  console.log("A request has arrived with a Get method to /things");

  res.status(200).json({ things });
};

const getThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const getThingToId = things.find((thing) => thing.id === Number(idThing));

  console.log("A request has arrived with a Get method to /things/idThing");

  res.status(200).json({ getThingToId });
};

export { getThingById, getThings };
