// Basic Express backend
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Fixxd backend running'));
app.listen(3001);