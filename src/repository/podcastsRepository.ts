import mongoose from 'mongoose';
import { Podcasts } from '../models';

const PodcastsSchema = new mongoose.Schema<Podcasts>({
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

export const PodcastsRepository = mongoose.model<Podcasts>('podcasts', PodcastsSchema);
