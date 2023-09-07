import { routes } from '.';
import { Application } from 'express';

export function useRoutes(app: Application) {
  app.get('/', (req, res) => res.send({ version: '0.0.1' }));

  for (let i = 0; i < routes.length; i++) {
    app.use('/', routes[i]);
  }
}
