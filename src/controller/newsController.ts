import { Request, Response } from 'express';
import { NewsService } from '../services/newsService';

type IResponseExpress = (req: Request, res: Response) => Promise<void>;

class NewsController {
  private _service: NewsService;

  constructor() {
    this._service = new NewsService();
  }

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

export default new NewsController();
