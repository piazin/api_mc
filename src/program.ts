import { startUp } from './startUp';

const port = '5000';

startUp.app.listen(port, () => {
  console.info(`server running in  localhost:${port}`);
});
