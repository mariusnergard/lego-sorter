const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const uid = require('uid-safe');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const https = require('https');
const http = require('http');
const fs = require('fs');

const allowedOrigins = [
  'http://localhost:7070',
  'http://scriptrunner',
  'https://lysws0004:7070',
];

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors({
      origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not '
            + 'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    }));

    const sessionConfig = {
      secret: uid.sync(18),
      cookie: {
        maxAge: 3600000,
      },
      resave: false,
      saveUninitialized: true,
    };

    server.use(session(sessionConfig));

    server.get('*', (req, res) => handle(req, res));

    http.createServer(server).listen(7071, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:7071');
    });
    https.createServer({
      key: fs.readFileSync('./sslcert/key.pem'),
      cert: fs.readFileSync('./sslcert/cert.pem'),
      passphrase: '!QAZxsw2',
    }, server).listen(7070, (err) => {
      if (err) throw err;
      console.log('> Ready on https://localhost:7070');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
