import { type NextFunction, type Response } from "express";
import { things } from "../../database/data.js";
import type ParamIdRequest from "../../types.js";
import { getThingById, getThings } from "./thingsControllers.js";

const req: Pick<ParamIdRequest, "params"> = {
  params: { idThing: "1" },
};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: Partial<NextFunction> = jest.fn();

const expectedStatusCode = 200;

describe("Given thingsControllers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      getThings(req as ParamIdRequest, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  test("Then it should call its method json with 'React', 'Git Graph', 'Netlify', 'Typescript', 'Testing'", () => {
    getThings(req as ParamIdRequest, res as Response);

    expect(res.json).toHaveBeenCalledWith({ things });
  });
});

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
