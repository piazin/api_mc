import { Result } from '../infra/result';
import { Videos } from '../models/videos';
import { IVideosService } from '../contracts/iVideosService';
import { VideosRepository } from '../repository/videosRepository';

export class VideosService implements IVideosService {
  async get(id: string): Promise<Videos> {
    let result = await VideosRepository.findById(id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Videos>> {
    let result = new Result<Videos>();

    result = {
      Page: page,
      Qtd: qtd,
      Total: await VideosRepository.count(),
      Data: await VideosRepository.find()
        .skip(page * qtd - qtd)
        .limit(qtd),
    };

    return result;
  }
}
