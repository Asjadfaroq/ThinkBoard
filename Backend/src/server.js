import express from 'express';
import notesRoutes from './Routes/NotesRoutes.js';
import { connectDB } from './Config/db.js';
import dotenv from 'dotenv';


dotenv.config();

console.log("MONGO_URI:", process.env.MonoDB);
const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
})