import DiretorCasalSimples from "../diretores/CasalSimples";
import DiretorFamiliaMais from "../diretores/FamiliaPlus";
import DiretorFamiliaSimples from "../diretores/FamiliaSimples";
import DiretorFamiliaSuper from "../diretores/FamiliaPlusize";
import DiretorSolteiroMais from "../diretores/SolteiroPlus";
import DiretorSolteiroSimples from "../diretores/SolteiroSimples";
import Armazem from "../dominio/armazem";
import Processo from "../abstração/processos";
import Acomodacao from "../modelos/acomod";

export default class CadastroAcomod extends Processo {
  private acomodacoes: Acomodacao[];

  constructor() {
    super();
    this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
  }
  
  processar(): void {
    let diretor = new DiretorCasalSimples();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorFamiliaSimples();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorFamiliaMais();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorFamiliaSuper();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorSolteiroSimples();
    this.acomodacoes.push(diretor.construir());

    diretor = new DiretorSolteiroMais();
    this.acomodacoes.push(diretor.construir());
  }
}
