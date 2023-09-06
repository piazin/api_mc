import mongoose from 'mongoose';
import { Videos } from '../models/videos';

const VideosShema = new mongoose.Schema<Videos>({
  titulo: { String },
  texto: { String },
  imagem: { String },
  duracao: { String },
  link: { String },
  url: { String },
  dataPublicacao: { Date },
  tags: { String },
  ativo: { Boolean },
});

export const VideosRepository = mongoose.model<Videos>('videos', VideosShema);
