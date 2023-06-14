import promptSync from 'prompt-sync';

export default class Entrada {
  private prompt: any;

  constructor() {
    this.prompt = promptSync();
  }

  public receberNumero(mensagem: string): number {
    const valor = this.prompt(`${mensagem}: `);
    return Number(valor);
  }

  public receberTexto(mensagem: string): string {
    return this.prompt(`${mensagem}: `);
  }

  public receberData(mensagem: string): Date {
    const texto = this.prompt(`${mensagem}, no padrão dd/MM/yyyy: `);
    const partes = texto.split('/');
    const ano = Number(partes[2]);
    const mes = Number(partes[1]) - 1;
    const dia = Number(partes[0]);
    const data = new Date(ano, mes, dia);
    return data;
  }
}
