import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import notesRoutes from './Routes/NotesRoutes.js';
import { connectDB } from './Config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();
const app = express();

// Resolve paths relative to this file so they work in production
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const backendDir = path.resolve(__dirname, '..');
const frontendDistPath = path.resolve(backendDir, '../Frontend/dist');

if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
    }),
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(frontendDistPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

connectDB()
  .then(() => {
    app.listen(5001, () => {
      console.log('Server is running on port 5001');
    });
  })
  .catch((e) => {
    console.error('Failed to connect to the database', e);
    process.exit(1);
  });