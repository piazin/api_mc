import 'reflect-metadata';
import { Database } from './infra/db';
import express, { Application } from 'express';
import { NewsController, GaleriaController, VideosController } from './controller';
import { container } from 'tsyringe';
import './shared/container';

class StartUp {
  public app: Application;
  public _db: Database = new Database();
  private baseUrl = '/api/v1';
  private news = container.resolve<typeof NewsController>('INewsService');
  private videos = container.resolve<typeof VideosController>('IVideosService');
  private galeria = container.resolve<typeof GaleriaController>('IGaleriaService');

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
      return this.news.get(req, res);
    });

    this.app.route(`${this.baseUrl}/news/:id`).get((req, res) => {
      return this.news.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/videos/:id`).get((req, res) => {
      return this.videos.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/videos/:page/:qtd`).get((req, res) => {
      return this.videos.get(req, res);
    });

    this.app.route(`${this.baseUrl}/galeria/:id`).get((req, res) => {
      return this.galeria.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/galeria/:page/:qtd`).get((req, res) => {
      return this.galeria.get(req, res);
    });
  }
}

export const startUp = new StartUp();
