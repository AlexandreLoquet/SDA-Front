import {Sda} from '../sda/sda';

export class Animaux {
  id: number;
  nom: string;
  types: string[] = ['Chat', 'Chien'];
  isAdopte: boolean;
  dateAdopte: Date;
  sda: Sda;
}
