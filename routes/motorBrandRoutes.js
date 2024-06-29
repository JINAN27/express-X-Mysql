const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', async (req, res) => {
  try {
    const motorBrand = await db.MotorBrand.create(req.body);
    res.status(201).json(motorBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const motorBrands = await db.MotorBrand.findAll();
    res.json(motorBrands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const motorBrand = await db.MotorBrand.findByPk(req.params.id);
    if (motorBrand) {
      res.json(motorBrand);
    } else {
      res.status(404).json({ error: 'MotorBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const motorBrand = await db.MotorBrand.findByPk(req.params.id);
    if (motorBrand) {
      await motorBrand.update(req.body);
      res.json(motorBrand);
    } else {
      res.status(404).json({ error: 'MotorBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const motorBrand = await db.MotorBrand.findByPk(req.params.id);
    if (motorBrand) {
      await motorBrand.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'MotorBrand not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
