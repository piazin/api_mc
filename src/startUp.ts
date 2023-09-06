import { Database } from './infra/db';
import express, { Application } from 'express';
import NewsController from './controller/newsController';

class StartUp {
  public app: Application;
  public _db: Database = new Database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }
  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ version: '0.0.1' });
    });

    this.app.route('/api/v1/news/:page/:qtd').get((req, res) => {
      return NewsController.get(req, res);
    });

    this.app.route('/api/v1/news/:id').get((req, res) => {
      return NewsController.getById(req, res);
    });
  }
}

export const startUp = new StartUp();
