import app from ".";

const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
};

export default startServer;
