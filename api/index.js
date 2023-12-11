// api/index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/nombresDB', { useNewUrlParser: true });

const nombreSchema = new mongoose.Schema({
  nombre: String,
});

const Nombre = mongoose.model('Nombre', nombreSchema);

app.post('/guardarNombre', async (req, res) => {
  const { nombre } = req.body;

  const nuevoNombre = new Nombre({ nombre });

  try {
    await nuevoNombre.save();
    res.status(201).send('Nombre guardado correctamente.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/leerNombre', async (req, res) => {
  try {
    const nombres = await Nombre.find();
    res.status(200).json(nombres);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});