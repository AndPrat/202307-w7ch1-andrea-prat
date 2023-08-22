import { type Request, type Response } from "express";
import { getThings } from "./thingsControllers.js";

describe("Given thingsControllers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatusCode = 200;

      getThings(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
