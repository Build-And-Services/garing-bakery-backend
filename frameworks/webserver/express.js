const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')


function expressConfig (app, express) {
  app.use('/product', express.static(path.join(__dirname, 'public', 'product-images')));
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json())
}

module.exports = expressConfig
