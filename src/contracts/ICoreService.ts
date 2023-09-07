import { Result } from '../infra/result';

/**
 * Interface genérica para retorno de pesquisas
 */

export interface ICoreService<T> {
  /**
   * @summary busca uma model pelo id
   * @param id {String}
   * @returns {Promise<T>} retorna o resultado da pesquisa pelo seu id
   */
  get(id: string): Promise<T>;
  /**
   * @summary Realiza a busca paginada de uma model
   * @param page {number} pagina
   * @param qtd {number} quantidade de itens
   * @returns {Promise<Result<T>>} retorna o resultado da pesquisa paginada
   */
  getAll(page: number, qtd: number): Promise<Result<T>>;
}
