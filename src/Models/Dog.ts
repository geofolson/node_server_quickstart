import { Pet } from './Pet.js';
import { Species } from './Species.js';

export class Dog implements Pet {
  id: string;
  name: string;
  age: number;
  species: Species;
  price: number;

  constructor(
    id: string,
    name: string,
    species: Species,
    age: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.age = age;
    this.price = price;
  }
}
