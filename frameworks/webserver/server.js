const serverConfig = (app, port) => {
  function start() {
    try {
      app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));
    } catch (error) {
      console.log(error);
    }
  }
  start();
};

module.exports = serverConfig;
