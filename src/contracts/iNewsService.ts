import { News } from '../models/news';
import { ICoreService } from './ICoreService';

/**
 * Contrato INewsService
 * @summary esse contrato implementa a interface ICoreService passando a model News
 */
export interface INewsService extends ICoreService<News> {}
