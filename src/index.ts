import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

if (!port) {
  process.exit(1);
}

startServer(Number(port));
