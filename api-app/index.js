import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Opinion from './models/Opinion.js';

const app = express();
app.use(cors());
app.use(express.json());

// Esta función se asegura de conectar SOLO cuando se llama a la ruta
const conectarDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGO_URI);
};

app.post('/api/opiniones', async (req, res) => {
  try {
    await conectarDB(); // Conectamos justo antes de guardar
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json({ mensaje: '¡Opinión guardada con éxito!' });
  } catch (error) {
    console.error("ERROR DETALLADO:", error);
    // Enviamos el mensaje del error para verlo en el alert del navegador
    res.status(500).json({ error: "Fallo en la base de datos: " + error.message });
  }
});

export default app;