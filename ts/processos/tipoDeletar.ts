import Processo from "../abstracoes/processo";
import MenuTipoEdicao from "../menus/menuEdit";
import DeletarClienteDependente from "./deletarCliTitular";
import DeletarClienteTitular from "./deletarCliTitular";

export default class TipoDelecao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.recebeNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new DeletarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}