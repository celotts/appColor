const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.set('port', port);

app.use(express.static(__dirname + '/dist/https://dashboard.heroku.com/apps/373a870b-ae2a-40d6-a6d3-3ed31af5a9e2/activity/builds/7172c6b2-3646-4e14-b0f0-9aa27ad12313'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/https://dashboard.heroku.com/apps/373a870b-ae2a-40d6-a6d3-3ed31af5a9e2/activity/builds/7172c6b2-3646-4e14-b0f0-9aa27ad12313/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('console listening!' + app.get('port'));
})
