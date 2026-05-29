import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Opinion from './models/Opinion.js';

const app = express();
app.use(cors());
app.use(express.json());

const conectarDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  // Usamos dbName para ser específicos y evitar confusiones
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "taller_db" 
  });
};

app.post('/api/opiniones', async (req, res) => {
  try {
    await conectarDB();
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json({ mensaje: '¡Opinión guardada con éxito!' });
  } catch (error) {
    console.error("ERROR DETALLADO:", error);
    res.status(500).json({ error: error.message });
  }
});

export default app;