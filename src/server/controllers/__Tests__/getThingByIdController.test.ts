import { type NextFunction, type Response } from "express";
import mongoose from "mongoose";
import Thing from "../../../database/models/Things.js";
import type ThingStructure from "../../../database/models/types.js";
import type ParamIdRequest from "../../../types.js";
import { getThingById } from "../thingsControllers.js";

beforeEach(() => {
  jest.clearAllMocks();
});

const req: Pick<ParamIdRequest, "params"> = {
  params: { idThing: "64e641742939749ce75d360a" },
};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: Partial<NextFunction> = jest.fn();

const mockThings: ThingStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "React",
    situation: "Create reactive elements",
  },
];

Thing.find = jest.fn().mockReturnValue({
  exec: jest.fn().mockResolvedValue(mockThings),
});

describe("Given getThingById controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await getThingById(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with 'React' and 'Create reactive elements'", async () => {
      const { idThing } = req.params;
      const thing = await Thing.find(
        (thing: { id: number }) => thing.id === +idThing,
      ).exec();

      await getThingById(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ thing });
    });
  });
});
