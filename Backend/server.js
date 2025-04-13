// Created by Aditya Gupta


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/baggage-system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Schema for baggage
const baggageSchema = new mongoose.Schema({
  baggageId: String,
  status: String
});

const Baggage = mongoose.model('Baggage', baggageSchema);

// Endpoint to save baggage status
app.post('/api/baggage', async (req, res) => {
  const { baggageId, status } = req.body;
  const newBaggage = new Baggage({ baggageId, status });
  await newBaggage.save();
  res.json({ message: 'Baggage status updated!' });
});

// Endpoint to get baggage status
app.get('/api/baggage', async (req, res) => {
  const allBaggages = await Baggage.find();
  res.json(allBaggages);
});

// Run server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
