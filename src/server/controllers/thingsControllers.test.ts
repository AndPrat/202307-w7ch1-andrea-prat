import { type Request, type Response } from "express";
import { things } from "../../data/data.js";
import { getThings } from "./thingsControllers.js";

describe("Given thingsControllers controller", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      const expectedStatusCode = 200;

      getThings(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  test("Then it shold call its method json with 'React', 'Git Graph', 'Netlify', 'Typescript', 'Testing'", () => {
    getThings(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith({ things });
  });
});
