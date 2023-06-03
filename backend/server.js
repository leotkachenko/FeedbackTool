const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('./db/mongodb-connection');

const db_service = require('./db/services/toolService');
const jsonFile = require('./db/db_tools/tools.json');

const path = `${__dirname}/app/views/`;

app.use(express.static(path));

jsonFile.map((file) => db_service.saveTool(file, (saveErr, _) => {
  if (saveErr) {
    console.log(`Error saving ${jsonFile}`);
  }
}));

const corsOptions = {
  origin: '...', // PUT ORIGINS
};

app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${path}index.html`);
});

require('./app/routes/tools.routes')(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
