import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Opinion from './models/Opinion.js';

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB (con seguridad para no abrir muchas conexiones)
const conectarDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGO_URI);
};

// Ruta de API
app.post('/api/opiniones', async (req, res) => {
  try {
    await conectarDB();
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json({ mensaje: '¡Opinión guardada con éxito!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default app;