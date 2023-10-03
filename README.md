# API MC

Uma API para gerenciar conteúdos de mídia.

## Estrutura do Projeto

### Contratos

Interfaces que definem o comportamento esperado dos serviços.

- `ICoreService.ts`: Contrato para o serviço principal.
- `IGaleriaService.ts`: Contrato para o serviço de galeria.
- `IPodcastsService.ts`: Contrato para o serviço de podcasts.
- `iNewsService.ts`: Contrato para o serviço de notícias.
- `iVideosService.ts`: Contrato para o serviço de vídeos.

### Controladores

Manipulam as solicitações HTTP recebidas e retornam uma resposta.

- `galeriaController.ts`: Controlador para a galeria.
- `newsController.ts`: Controlador para notícias.
- `podcastsController.ts`: Controlador para podcasts.
- `videosController.ts`: Controlador para vídeos.

### Modelos

Definem a estrutura dos dados.

- `core.ts`: Modelo principal.
- `fotos.ts`: Modelo para fotos.
- `galeria.ts`: Modelo para galeria.
- `news.ts`: Modelo para notícias.
- `podcasts.ts`: Modelo para podcasts.
- `videos.ts`: Modelo para vídeos.

### Repositórios

Manipulam o armazenamento e recuperação de dados.

- `galeriaRepository.ts`: Repositório para a galeria.
- `newsRepository.ts`: Repositório para notícias.
- `podcastsRepository.ts`: Repositório para podcasts.
- `videosRepository.ts`: Repositório para vídeos.

### Serviços

Contêm a lógica de negócios.

- `galeriaService.ts`: Serviço para a galeria.
- `newsService.ts`: Serviço para notícias.
- `podcastsService.ts`: Serviço para podcasts.
- `videosService.ts`: Serviço para vídeos.

### Rotas

Definem os endpoints da API.

- `galeria.routes.ts`: Rotas para a galeria.
- `news.routes.ts`: Rotas para notícias.
- `podcasts.routes.ts`: Rotas para podcasts.
- `videos.routes.ts`: Rotas para vídeos.
