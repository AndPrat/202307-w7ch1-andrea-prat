import { Schema, model } from "mongoose";
import type ThingStructure from "./types.js";

const thingSchema = new Schema<ThingStructure>({
  name: {
    type: String,
    requiered: true,
  },
  situation: {
    type: String,
    required: true,
  },
});

const Thing = model("Things", thingSchema, "things");

export default Thing;
