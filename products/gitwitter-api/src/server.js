import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';

export const initServer = async () => {
  const app = express();

  app.use(
    bodyParser.json({
      limit: '20mb',
    }),
  );

  app.use('/', router);

  return app;
};
