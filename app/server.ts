import app from './app';
import logger from './config/logger';

const port = 8093;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  logger.info(`Server is running on: ${port}`);
});
