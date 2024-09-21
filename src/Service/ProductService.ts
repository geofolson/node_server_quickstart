import DatabaseClient from '../Persistence/DatabaseClient.js';
export default class ProductService {
  async getProducts(costRange: string[]) {
    const client = DatabaseClient.instance.prisma;
    const lowCost = costRange ? parseInt(costRange[0]) : -1;
    const highCost = costRange ? parseInt(costRange[1]) : -1;

    if (lowCost > -1 && highCost > -1) {
      return client.product.findMany({
        where: {
          price: {
            gt: lowCost,
            lte: highCost,
          },
        },
      });
    } else {
      return this.getAllProducts();
    }
  }

  async getAllProducts() {
    const client = DatabaseClient.instance.prisma;
    const products = await client.product.findMany();
    return products;
  }

  async getProductsForAnimalType(animalType: string) {
    const client = DatabaseClient.instance.prisma;
    const products = await client.product.findMany({
      where: {
        animal_type: animalType,
      },
    });
    return products;
  }
}
