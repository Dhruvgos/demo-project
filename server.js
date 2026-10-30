const express = require('express');
const app = express();

const region = process.env.REGION || 'default';

app.get('/', (req, res) => {
  res.send('Hello from my Docker app! Region: ' + region + " yeh new hai bhai kuch to alg");
});

app.listen(3000, () => console.log('Server running on port 3000'));