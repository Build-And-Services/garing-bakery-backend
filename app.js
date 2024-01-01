const express = require('express');
const app = express();
require('module-alias/register');
const expressConfig = require('@frameworks/express');
const serverConfig = require('@frameworks/server');

expressConfig(app, express);
serverConfig(app);
