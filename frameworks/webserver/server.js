const LogRouter = require('../../app/utils/custom-log');

function serverConfig(app) {
  function start() {
    const host = process.env.BASE_URL || 'http://localhost';
    const port = process.env.PORT || 3000;
    try {
      app.listen(port, () => console.log(`Server is listening on ${host}:${port}`));
      LogRouter(app);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  start();
}

module.exports = serverConfig;
