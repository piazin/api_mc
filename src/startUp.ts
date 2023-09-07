import './shared/container';
import { Database } from './infra/db';
import express, { Application } from 'express';
import { useRoutes } from './routes/use.routes';

class StartUp {
  public app: Application;
  public _db: Database = new Database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }
  routes() {
    useRoutes(this.app);
  }
}

export const startUp = new StartUp();
