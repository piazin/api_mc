import { Result } from '../infra/result';
import { Galeria } from '../models/galeria';
import { IGaleriaService } from '../contracts/IGaleriaService';
import { GaleriaRepository } from '../repository/galeriaRepository';

export class GaleriaService implements IGaleriaService {
  async get(id: string): Promise<Galeria> {
    const result = await GaleriaRepository.findById(id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
    let result = new Result<Galeria>();

    result = {
      Page: page,
      Qtd: qtd,
      Total: await GaleriaRepository.count(),
      Data: await GaleriaRepository.find()
        .skip(page * qtd - qtd)
        .limit(qtd),
    };

    return result;
  }
}
