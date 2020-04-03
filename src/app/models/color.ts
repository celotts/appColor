import { Empresa } from './empresa';
export class Color extends Empresa {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: any = [];
  constructor(objetoColor: IObjetoColor) {
    super(objetoColor['ad']);

    this.page = objetoColor && objetoColor['page'] || 0;
    this.perPage = objetoColor && objetoColor['perPage'] || 0;
    this.total = objetoColor && objetoColor['total'] || 0;
    this.totalPages = objetoColor && objetoColor['total_pages'] || 0;
    this.data = objetoColor && objetoColor['data'] || null;

  }
}

interface IObjetoColor {
  objetoColor: [];
}
