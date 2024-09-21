import DatabaseClient from '../../src/Persistence/DatabaseClient.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const pets = {
  data: [
    {
      name: 'Tony',
      age: 1,
      animal_type: 'tiger',
      price: 100.0,
    },
    {
      name: 'Reginald',
      age: 3,
      animal_type: 'racoon',
      price: 199.0,
    },
  ],
};
const products = {
  data: [
    {
      display_name: 'Tiger Food',
      product_type: 'pet food',
      animal_type: 'tiger',
      price: 10.0,
    },
    {
      display_name: 'Racoon Food',
      product_type: 'pet food',
      animal_type: 'racoon',
      price: 5.0,
    },
  ],
};
const animalTypes = {
  data: [
    {
      type: 'tiger',
    },
    {
      type: 'racoon',
    },
  ],
};

const seed = async () => {
  const client = DatabaseClient.instance.prisma;
  await client.animalType.createMany(animalTypes);
  await client.pet.createMany(pets);
  await client.product.createMany(products);
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
