import { IResponseExpress } from './types';
import { inject, injectable } from 'tsyringe';
import { IVideosService } from '../contracts/iVideosService';

@injectable()
export class VideosController {
  constructor(@inject('IVideosService') private _service: IVideosService) {}

  get: IResponseExpress = async (req, res) => {
    try {
      const { page, qtd } = req.params;

      const amount = qtd ? parseInt(qtd) : 10;
      const pageNumber = page ? parseInt(page) : 1;

      const result = await this._service.getAll(pageNumber, amount);

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getById: IResponseExpress = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await this._service.get(id);

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
