const express = require('express');
const app = express();

app.get('/api/orders', (req, res) => {
  res.json({ message: 'Orders API working' });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(4000, () => console.log('API running on 4000'));