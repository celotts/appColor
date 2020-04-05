const express = require('express');
const app = express();
const path = require('path');


app.listen(process.env.PORT || 8080);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/app-color/index.html'));
});
app.use(express.static(__dirname + '/dist/app-color'))
console.log('console listening!');
