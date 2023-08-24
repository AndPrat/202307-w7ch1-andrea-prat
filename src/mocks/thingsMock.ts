import mongoose from "mongoose";
import type ThingStructure from "../database/models/types.js";

export const idThing = new mongoose.Types.ObjectId().toString();

export const thingsMock: ThingStructure[] = [
  {
    id: idThing,
    name: "React",
    situation: "Create reactive elements",
  },
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "React",
    situation: "Create reactive elements",
  },
];
