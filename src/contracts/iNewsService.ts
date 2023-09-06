import { News } from '../models/news';
import { ICoreService } from './ICoreService';

export interface INewsService extends ICoreService<News> {}
