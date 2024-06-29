const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', async (req, res) => {
  try {
    const carBrand = await db.CarBrand.create(req.body);
    res.status(201).json(carBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const carBrands = await db.CarBrand.findAll();
    res.json(carBrands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const carBrand = await db.CarBrand.findByPk(req.params.id);
    if (carBrand) {
      res.json(carBrand);
    } else {
      res.status(404).json({ error: 'CarBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const carBrand = await db.CarBrand.findByPk(req.params.id);
    if (carBrand) {
      await carBrand.update(req.body);
      res.json(carBrand);
    } else {
      res.status(404).json({ error: 'CarBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const carBrand = await db.CarBrand.findByPk(req.params.id);
    if (carBrand) {
      await carBrand.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'CarBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
