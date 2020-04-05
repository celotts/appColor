const express = require('express');

const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.set('port', port);

app.use(express.static(__dirname + '/dist/'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('console listening!' + app.get('port'));
})
