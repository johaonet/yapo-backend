import { Application, urlencoded, json } from 'express';
import * as fs from 'fs';
import { WriteStream } from 'fs';
import * as path from 'path';
import * as winston from 'winston';

import { unCoughtErrorHandler } from './handlers/errorHandler';
import Routes from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    const accessLogStream: WriteStream = fs.createWriteStream(
      path.join(__dirname, './logs/access.log'),
      { flags: 'a' }
    );
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE, PATCH"
      );
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    
      if ("OPTIONS" === req.method) {
    
        res.send(200);
      } else {
        next();
      }
    });
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(unCoughtErrorHandler);
  }
}

process.on('beforeExit', function (err) {
  winston.error(JSON.stringify(err));
  console.error(err);
});
