import mongoose from 'mongoose';
import { News } from '../models/news';

const NewsSchema = new mongoose.Schema<News>({
  tags: { type: String },
  link: { type: String },
  texto: { type: String },
  autor: { type: String },
  chapeu: { type: String },
  titulo: { type: String },
  imagem: { type: String },
  ativo: { type: Boolean },
  dataPublicacao: { type: Date },
});

export const NewsRepository = mongoose.model<News>('news', NewsSchema);
