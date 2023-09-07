import { Document } from 'mongoose';

/**
 * @summary classe abstrata para criação da models
 * @type titulo {String} titulo
 * @type texto {String} texto ou descrição
 * @type imagem {String} imagem default ou avatar
 * @type dataPublicacao {Date} data de publicação
 * @type tags {String} tags relacionadas a model
 * @type link {String} link do conteudo
 * @type ativo {Boolean} status
 */

export abstract class Core extends Document {
  titulo: String;
  texto: String;
  imagem: String;
  dataPublicacao: Date;
  tags: String;
  link: String;
  ativo: Boolean;
}
