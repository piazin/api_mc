import { Videos } from '../models/videos';
import { ICoreService } from './ICoreService';

/**
 * Contrato IVideosService
 * @summary esse contrato implementa a interface ICoreService passando a model Videos
 */
export interface IVideosService extends ICoreService<Videos> {}
