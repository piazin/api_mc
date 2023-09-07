import { Core } from './core';

/**
 * Model de fotos
 * @type thumb {String} foto principal
 * @type thumbNail {String} foto menor
 * @type credito {String} quem tirou a foto
 * @type legenda {String} legenda da foto
 */

export class Fotos extends Core {
  thumb: String;
  thumbNail: String;
  credito: String;
  legenda: String;
}
