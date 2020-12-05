import { Filial } from '../filiais/filial';

export interface Empresa {
  codigo: string;
  nomeFantasia: string;
  nomeReal: string;
  filiais: Filial[];
}
