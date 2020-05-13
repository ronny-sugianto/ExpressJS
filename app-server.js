import http from 'http';
import express from 'express';
import middleware from './Middlewares/base-middlewares';
import route from './Routes/base-routes';

const app = express();
app.use(middleware);
app.use(route);

const server = http.createServer(app);
server.on('error', function (e) {
    console.log('APP-SERVER-ERROR : ' + e);
});

module.exports = server;