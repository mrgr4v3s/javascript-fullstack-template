const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-conf');

requireDir('./src/models');
const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/producthunterlookalike', { useNewUrlParser: true });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes);

const port = 3001;
app.listen(port || 3001);
