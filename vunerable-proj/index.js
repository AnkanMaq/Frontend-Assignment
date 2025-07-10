const express = require('express');
const lodash = require('lodash');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Insecure: Hardcoded secret
const SECRET = 'supersecret123';

// Insecure: Use of eval
app.get('/eval', (req, res) => {
  const code = req.query.code;
  try {
    const result = eval(code); // Dangerous!
    res.send(`Result: ${result}`);
  } catch (e) {
    res.status(400).send('Error in eval');
  }
});

app.use(morgan('dev'));

app.get('/', (req, res) => {
  debug('Root endpoint hit');
  res.send('Hello from a vulnerable app!');
});

app.listen(port, () => {
  console.log(`Vulnerable app listening at http://localhost:${port}`);
});
