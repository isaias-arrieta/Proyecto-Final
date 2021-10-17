const https = require('https');
const fs = require('fs');
const app = require('./app');
const port = 3000;

https.createServer({
    key: fs.readFileSync('my_cert.key'),
    cert: fs.readFileSync('my_cert.crt')
  }, app).listen(port, function(){
    console.log("My HTTPS server listening on port " + port + "...");
  });