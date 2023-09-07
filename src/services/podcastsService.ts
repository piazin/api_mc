import { Podcasts } from '../models';
import { Result } from '../infra/result';
import { IPodcastsService } from '../contracts/IPodcastsService';
import { PodcastsRepository } from '../repository/podcastsRepository';

export class PodcastsService implements IPodcastsService {
  async get(id: string): Promise<Podcasts> {
    let result = await PodcastsRepository.findById(id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Podcasts>> {
    let result = new Result<Podcasts>();

    result = {
      Page: page,
      Qtd: qtd,
      Total: await PodcastsRepository.count(),
      Data: await PodcastsRepository.find()
        .skip(page * qtd - qtd)
        .limit(qtd),
    };

    return result;
  }
}
