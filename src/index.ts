import express from 'express';
import PetService from './Service/PetService.js';
import ProductService from './Service/ProductService.js';
import querystring from 'node:querystring';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', async (req, res) => {
  res.json('Hello, World!');
});

app.get('/pets', async (req, res) => {
  const PS = new PetService();
  const pets = await PS.getAllPets();
  res.json(pets);
});

app.get('/pets/count', async (req, res) => {
  const PS = new PetService();
  const count = await PS.getCountPets();
  res.json(count);
});

app.get('/products', async (req, res) => {
  const PS = new ProductService();
  const costRange = req.query.cost as string[];
  const products = await PS.getProducts(costRange);
  res.json(products);
});

app.get('/products/:animalType', async (req, res) => {
  const { animalType } = req.params;
  const PS = new ProductService();
  const products = await PS.getProductsForAnimalType(animalType);
  res.json(products);
});
