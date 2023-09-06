import { Database } from './infra/db';
import express, { Application } from 'express';
import NewsController from './controller/newsController';
import VideosController from './controller/videosController';
import GaleriaController from './controller/galeriaController';

class StartUp {
  public app: Application;
  public _db: Database = new Database();
  private baseUrl = '/api/v1';

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }
  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ version: '0.0.1' });
    });

    this.app.route(`${this.baseUrl}/news/:page/:qtd`).get((req, res) => {
      return NewsController.get(req, res);
    });

    this.app.route(`${this.baseUrl}/news/:id`).get((req, res) => {
      return NewsController.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/videos/:id`).get((req, res) => {
      return VideosController.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/videos/:page/:qtd`).get((req, res) => {
      return VideosController.get(req, res);
    });

    this.app.route(`${this.baseUrl}/galeria/:id`).get((req, res) => {
      return GaleriaController.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/galeria/:page/:qtd`).get((req, res) => {
      return GaleriaController.get(req, res);
    });
  }
}

export const startUp = new StartUp();
