import { Galeria } from '../models/galeria';
import { ICoreService } from './ICoreService';

/**
 * Contrato IGaleriaService
 * @summary esse contrato implementa a interface ICoreService passando a model Galeria
 */
export interface IGaleriaService extends ICoreService<Galeria> {}
