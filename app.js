const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
app.use(bodyParser.json());


db.sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database', err));


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.post('/car-brands', async (req, res) => {
  try {
    const carBrand = await db.CarBrand.create(req.body);
    res.status(201).json(carBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/car-brands', async (req, res) => {
  try {
    const carBrands = await db.CarBrand.findAll();
    res.json(carBrands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/car-brands/:id', async (req, res) => {
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

app.put('/car-brands/:id', async (req, res) => {
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

app.delete('/car-brands/:id', async (req, res) => {
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


app.post('/motor-brands', async (req, res) => {
  try {
    const motorBrand = await db.MotorBrand.create(req.body);
    res.status(201).json(motorBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/motor-brands', async (req, res) => {
  try {
    const motorBrands = await db.MotorBrand.findAll();
    res.json(motorBrands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/motor-brands/:id', async (req, res) => {
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

app.put('/motor-brands/:id', async (req, res) => {
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

app.delete('/motor-brands/:id', async (req, res) => {
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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
