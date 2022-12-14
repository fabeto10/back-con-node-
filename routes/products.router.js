const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

router.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/products/:id', (req, res) => {
  const {id} = req.params.id;
  res.json({
    id,
    name: 'Porducto 2',
    price: 1000
  })
});

module.exports = router;
