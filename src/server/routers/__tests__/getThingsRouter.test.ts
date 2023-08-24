import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import Thing from "../../../database/models/Things.js";
import type ThingStructure from "../../../database/models/types.js";
import { thingsMock } from "../../../mocks/thingsMock.js";
import app from "../../index.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a GET '/things' endpoint", () => {
  beforeEach(async () => {
    await Thing.create(thingsMock);
  });

  describe("When it receives a request", () => {
    test("Then it should respond with status 200 with 'React', 'Git Graph', 'Netlify', 'Typescript' and 'Testing'", async () => {
      const expectedStatusCode = 200;
      const thingsPath = "/things";

      const response = await request(app)
        .get(thingsPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { things: ThingStructure[] };

      thingsMock.forEach(({ name }, thingsPosition) => {
        expect(responseBody.things[thingsPosition]).toHaveProperty(
          "name",
          name,
        );
      });
    });
  });
});
