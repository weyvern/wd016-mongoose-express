if (process.env.NODE_ENV !== 'production') {
  await import('dotenv/config.js');
}
import express from 'express';
import postsRouter from './routes/postsRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  const morgan = await import('morgan');
  app.use(morgan.default('dev'));
}

app.use(express.json());
app.use('/posts', postsRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
