import express from 'express';
import notesRoutes from './Routes/NotesRoutes';
const app = express();


app.use("/", notesRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
})