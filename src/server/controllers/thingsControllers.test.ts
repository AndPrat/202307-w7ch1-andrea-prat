import { type Request, type Response } from "express";
import { things } from "../../data/data.js";
import type ParamIdRequest from "../../types.js";
import { getThingById, getThings } from "./thingsControllers.js";

const req: Partial<ParamIdRequest> = {
  params: { idThing: "1" },
};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const expectedStatusCode = 200;

describe("Given getThings controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      getThings(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  test("Then it shold call its method json with 'React', 'Git Graph', 'Netlify', 'Typescript', 'Testing'", () => {
    getThings(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith({ things });
  });
});

describe("Given getThingById controller", () => {
  describe("When it receives a response", () => {
    getThingById(req as ParamIdRequest, res as Response);

    test("Then it should call its method status with 200", () => {
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
