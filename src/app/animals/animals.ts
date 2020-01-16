import {Sda} from '../sda/sda';
import {Users} from '../users/users';

export class Animals {
  id: number;
  name: string;
  types: string;
  isAdopt: boolean;
  adoptionDate: Date;
  sda: Sda;
  carer: Users;
}
