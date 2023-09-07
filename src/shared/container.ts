import 'reflect-metadata';
import { container } from 'tsyringe';
import { NewsService, GaleriaService, VideosService } from '../services';
import { PodcastsService } from '../services/podcastsService';

container.register<NewsService>('INewsService', { useClass: NewsService });
container.register<VideosService>('IVideosService', { useClass: VideosService });
container.register<GaleriaService>('IGaleriaService', { useClass: GaleriaService });
container.register<PodcastsService>('IPodcastsService', { useClass: PodcastsService });
