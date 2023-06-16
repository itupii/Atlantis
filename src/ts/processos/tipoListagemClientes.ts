import Processo from "../abstração/processos";
import MenuTipoListagemClientes from "../menus/menuTipoListCli";
import ListagemDependentes from "./listagemDependentes";
import ListagemDependentesTitular from "./listagemDependentesTitular";
import ListagemTitularDependente from "./listagemTitularDependente";
import ListagemTitulares from "./listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.recebeNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemTitularDependente()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemDependentesTitular()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}