import { Species } from './Species.js';
export interface Pet {
  id: string;
  name: string;
  age: number;
  species: Species;
  price: number;
}
