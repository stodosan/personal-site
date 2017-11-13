var path = require('path');
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var srcPath = __dirname + '/src';
var destPath = __dirname + '/public';
const { exec } = require('child_process');

var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 8080;
var app = express();

app.use(sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
// default
app.use(express.static(__dirname + '/public'));
http.createServer(app).listen(port, () => {
  console.info('Server listening on port', port);
  try {
    exec(`explorer http://localhost:${port}`);
    console.info('Opened in browser.');
  } catch(e) {
    console.error('Wasn\'t able to open in browser', e);
  }
});
