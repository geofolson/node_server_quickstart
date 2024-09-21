import DatabaseClient from '../Persistence/DatabaseClient.js';
export default class PetService {
  async getAllPets() {
    const client = DatabaseClient.instance.prisma;
    const pets = await client.pet.findMany();
    return pets;
  }
  async getCountPets() {
    const client = DatabaseClient.instance.prisma;
    const countPets = await client.pet.count();
    return countPets;
  }
}
