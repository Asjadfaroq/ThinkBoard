import express from 'express';
import notesRoutes from './Routes/NotesRoutes.js';
import { connectDB } from './Config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();
const app = express();

app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then( () => {
app.listen(5001, () => {
  console.log('Server is running on port 5001');
})
}).catch( (e) => {
    console.error("Failed to connect to the database", e);
    process.exit(1);
});