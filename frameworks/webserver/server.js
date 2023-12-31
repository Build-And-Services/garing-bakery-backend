function serverConfig(app) {
  function start() {
    const host = process.env.BASE_URL || 'http://localhost';
    const port = process.env.PORT || 3000;
    try {
      app.listen(port, () => console.log(`Server is listening on ${host}:${port}`));
    } catch (error) {
      console.log(error);
    }
  }
  start();
}

module.exports = serverConfig;
