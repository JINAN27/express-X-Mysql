const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const carBrandRoutes = require('./routes/carBrandRoutes');
const motorBrandRoutes = require('./routes/motorBrandRoutes');

const app = express();
app.use(bodyParser.json());


db.sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database', err));


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/car-brands', carBrandRoutes);
app.use('/motor-brands', motorBrandRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
