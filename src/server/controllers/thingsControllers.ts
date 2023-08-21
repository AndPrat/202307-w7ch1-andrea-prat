import { type Request, type Response } from "express";
import { things } from "../../data/data.js";

const getThings = (_req: Request, res: Response) => {
  console.log("A request has arrived with a Get method to /things");

  res.status(200).json({ things });
};

export default getThings;
