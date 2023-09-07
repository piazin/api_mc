import 'reflect-metadata';
import { Router } from 'express';
import { container } from 'tsyringe';
import { VideosController } from '../controller';

const baseUrl = '/api/v1';

const videosRouter = Router();
const videos = container.resolve(VideosController);

videosRouter.route(`${baseUrl}/videos/:id`).get(videos.getById);

videosRouter.route(`${baseUrl}/videos/:page/:qtd`).get(videos.get);

export { videosRouter };
