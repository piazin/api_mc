import 'reflect-metadata';
import { Router } from 'express';
import { container } from 'tsyringe';
import { NewsController } from '../controller';

const baseUrl = '/api/v1';

const newsRouter = Router();
const news = container.resolve(NewsController);

newsRouter.route(`${baseUrl}/news/:id`).get(news.getById);

newsRouter.route(`${baseUrl}/news/:page/:qtd`).get(news.get);

export { newsRouter };
