import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Opinion from './models/Opinion.js'; 

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Ruta 1: Por si el frontend busca /opiniones
app.post('/opiniones', async (req, res) => {
  try {
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json('¡Opinión guardada con éxito!' );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Ruta 2: Por si el frontend busca /api/opiniones
app.post('/api/opiniones', async (req, res) => {
  try {
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json({ mensaje: '¡Opinión guardada con éxito!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

const MONGO_URI = 'mongodb+srv://rodrigoralesmendoza26_db_user:mendoza2777@cluster0.392v5gb.mongodb.net/taller_db?appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('¡Conexión exitosa a la base de datos MongoDB!');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });