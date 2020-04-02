

export class Empresa {
  company: string;
  url: string;
  text: string;
  constructor(objetoAd: IEmpresa) {
    this.company = objetoAd && objetoAd.company || null;
    this.url = objetoAd && objetoAd.url || null;
    this.text = objetoAd && objetoAd.text || null;

  }

  getEmpresa() {
    return Empresa;
  }

}

interface IEmpresa {
  company: string;
  url: string;
  text: string;
}




