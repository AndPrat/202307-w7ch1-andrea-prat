import { type Request, type Response } from "express";
import mongoose from "mongoose";
import Thing from "../../../database/models/Things.js";
import type ThingStructure from "../../../database/models/types.js";
import { getThings } from "../thingsControllers.js";

beforeEach(() => {
  jest.clearAllMocks();
});

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

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

describe("Given thingsControllers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await getThings(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  test("Then it should call its method json with 'React', 'Git Graph', 'Netlify', 'Typescript', 'Testing'", async () => {
    await getThings(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith({ things: mockThings });
  });
});
