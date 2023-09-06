import { Result } from '../infra/result';

export interface ICoreService<T> {
  get(id: string): Promise<T>;
  getAll(page: number, qtd: number): Promise<Result<T>>;
}
