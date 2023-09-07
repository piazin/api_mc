import 'reflect-metadata';
import './shared/container';
import { container } from 'tsyringe';
import { Database } from './infra/db';
import express, { Application } from 'express';
import {
  NewsController,
  GaleriaController,
  VideosController,
  PodcastsController,
} from './controller';

class StartUp {
  public app: Application;
  public _db: Database = new Database();
  private baseUrl = '/api/v1';
  private news = container.resolve(NewsController);
  private videos = container.resolve(VideosController);
  private galeria = container.resolve(GaleriaController);
  private podcasts = container.resolve(PodcastsController);

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

    this.app.route(`${this.baseUrl}/podcasts/:id`).get((req, res) => {
      return this.podcasts.getById(req, res);
    });

    this.app.route(`${this.baseUrl}/podcasts/:page:qtd`).get((req, res) => {
      return this.podcasts.get(req, res);
    });
  }
}

export const startUp = new StartUp();
