import 'reflect-metadata';
import { Router } from 'express';
import { container } from 'tsyringe';
import { PodcastsController } from '../controller';

const baseUrl = '/api/v1';

const podcastsRouter = Router();
const podcasts = container.resolve(PodcastsController);

podcastsRouter.route(`${baseUrl}/podcasts/:id`).get(podcasts.getById);

podcastsRouter.route(`${baseUrl}/podcasts/:page/:qtd`).get(podcasts.get);

export { podcastsRouter };
