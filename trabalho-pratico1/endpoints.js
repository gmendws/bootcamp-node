const express = require('express');
const getBrandWithMostModels = require('./getBrandWithMostModels');
const getXBrandsWithMostModels = require('./getXBrandsWithMostModels');
const getXBrandsWithLeastModels = require('./getXBrandsWithLeastModels');
const getModelsByBrand = require('./getModelsByBrand');
const getBrandWithLeastModels = require('./getBrandWithLeastModels');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/marcas/maisModelos', (req, res) => {
  const brands = getBrandWithMostModels();
  res.json(brands);
});

app.get('/marcas/menosModelos', (req, res) => {
  const brands = getXBrandsWithLeastModels(5);
  res.json(brands);
});

app.get('/marcas/listaMaisModelos/:x', (req, res) => {
  const x = Number(req.params.x);
  const brands = getXBrandsWithMostModels(x);
  res.json(brands);
});

app.get('/marcas/listaMenosModelos/:x', (req, res) => {
  const x = Number(req.params.x);
  const brands = getXBrandsWithLeastModels(x);
  res.json(brands);
});

app.post('/marcas/listaModelos', (req, res) => {
  const { nomeMarca } = req.body;
  const models = getModelsByBrand(nomeMarca);
  res.json(models);
});

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
