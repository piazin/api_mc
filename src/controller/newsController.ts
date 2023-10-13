import { IResponseExpress } from './types';
import { inject, injectable } from 'tsyringe';
import { INewsService } from '../contracts/iNewsService';

@injectable()
export class NewsController {
  constructor(@inject('INewsService') private _service: INewsService) {}

  get: IResponseExpress = async (req, res) => {
    try {
      const { page, qtd } = req.params;

      const amount = qtd ? parseInt(qtd) : 10;
      const pageNumber = page ? parseInt(page) : 1;

      let result = await this._service.getAll(pageNumber, amount);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
    }
  };

  getById: IResponseExpress = async (req, res) => {
    try {
      const { id } = req.params;

      let result = await this._service.get(id);

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
    }
  };
}
