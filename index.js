const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/api/whoami', (req, res) => {
  let address = req.headers['x-forwarded-for'] || req.connection.remoteAddress, // req.ip
    language = req.acceptsLanguages(),
    system = req.useragent; // req.get('User-Agent')

  let { browser, os, version } = system;

  res.json({ address: address.split(',')[0] || address, language, browser, os, 'browserVersion': version });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
})

module.exports = { app };
