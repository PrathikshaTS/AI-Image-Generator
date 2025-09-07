import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/PostRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
dotenv.config();

const app = express();
console.log('CLIENT_URL:', process.env.CLIENT_URL);
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
     connectDB(process.env.MONGODB_URL);
    app.listen(8001, () => console.log('Server started on port 8001'));
  } catch (error) {
    console.log(error);
  }
};
startServer();
