import {Sda} from '../sda/sda';
import {Users} from '../users/users';

export class Animaux {
  id: number;
  nom: string;
  types: string[] = ['Chat', 'Chien'];
  isAdopte: boolean;
  dateAdoption: Date;
  sda: Sda;
  adoptant: Users;
}
