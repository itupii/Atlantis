import Processo from "../abstração/processos";
import MenuTipoCadastroCliente from "../menus/menuTipoCadCli";
import CadastroClienteDependente from "./cadastroCliDependente";
import CadastroClienteTitular from "./cadastroCliTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.recebeNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }

    
}