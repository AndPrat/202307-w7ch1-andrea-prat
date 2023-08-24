import { type NextFunction, type Response } from "express";
import { things } from "../../../database/data.js";
import type ParamIdRequest from "../../../types.js";
import { getThingById } from "../thingsControllers.js";

const req: Pick<ParamIdRequest, "params"> = {
  params: { idThing: "1" },
};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: Partial<NextFunction> = jest.fn();

const expectedStatusCode = 200;

describe("Given getThingById controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      getThingById(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with 'React' and 'Create reactive elements'", () => {
      const { idThing } = req.params;
      const getThingToId = things.find((thing) => thing.id === +idThing);

      getThingById(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ getThingToId });
    });
  });
});
