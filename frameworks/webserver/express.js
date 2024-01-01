const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const errorMidlleware = require('../../app/middlewares/error-middleware');
const router = require('../../app/routes');

function expressConfig(app, express) {
  app.use('/product', express.static(path.join(__dirname, 'public', 'product-images')));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/api/v1', router);
  app.use(errorMidlleware);
}

module.exports = expressConfig;
