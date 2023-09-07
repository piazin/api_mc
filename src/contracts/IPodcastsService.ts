import { Podcasts } from '../models';
import { ICoreService } from './ICoreService';

/**
 * Contrato IPodcastsService
 * @summary esse contrato implementa a interface ICoreService passando a model Podcasts
 */
export interface IPodcastsService extends ICoreService<Podcasts> {}
