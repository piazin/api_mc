import { IResponseExpress } from './types';
import { inject, injectable } from 'tsyringe';
import { IPodcastsService } from '../contracts/IPodcastsService';

@injectable()
class PodcastsController {
  constructor(@inject('IPodcastsService') private _service: IPodcastsService) {}

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

export default PodcastsController;
