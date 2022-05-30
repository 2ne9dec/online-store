import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import corsMiddleware from './middleware/cors.middleware.js';
import authRouter from './routes/auth.routes.js';

const app = express();
const PORT = config.get('serverPort') || 5000;

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'));

    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
