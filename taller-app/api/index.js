import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Opinion from './models/Opinion.js';

const app = express();
app.use(cors());
app.use(express.json());

// Función de conexión optimizada para entornos serverless (como Vercel)
const conectarDB = async () => {
  // Verificamos si ya hay una conexión activa o en proceso
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "taller_db",
      // Opciones adicionales recomendadas para evitar advertencias de deprecación
      serverSelectionTimeoutMS: 5000, 
    });
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    throw new Error("No se pudo conectar a la base de datos");
  }
};

app.post('/api/opiniones', async (req, res) => {
  try {
    await conectarDB();
    
    // Validación básica: asegura que req.body tenga datos
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío' });
    }

    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    
    res.status(201).json({ mensaje: '¡Opinión guardada con éxito!' });
  } catch (error) {
    console.error("ERROR DETALLADO:", error);
    res.status(500).json({ error: 'Error al procesar la opinión' });
  }
});

export default app;