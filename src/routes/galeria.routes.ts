import 'reflect-metadata';
import { Router } from 'express';
import { container } from 'tsyringe';
import { GaleriaController } from '../controller';

const baseUrl = '/api/v1';

const galeriaRouter = Router();
const galeria = container.resolve(GaleriaController);

galeriaRouter.route(`${baseUrl}/galeria/:id`).get(galeria.getById);

galeriaRouter.route(`${baseUrl}/galeria/:page/:qtd`).get(galeria.get);

export { galeriaRouter };
