import { Empresa } from '../empresas/empresa';

export interface Filial {
  codigo: string;
  nome: string;
  empresaCodigo: string;
  empresa: Empresa;
}
