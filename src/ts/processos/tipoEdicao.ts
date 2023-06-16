import Processo from "../abstração/processos";
import MenuTipoEdicao from "../menus/menuTipoEdicao";
import EditarClienteDependente from "./editarCliDependente";
import EditarCliTitular from "./editarCliTitular";

export default class TipoEdicao extends Processo {
    entrada: any;
    menu: any;
    opcao: any;
    processo!: EditarClienteDependente;

    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
              const editarCliTitular = new EditarCliTitular();
              editarCliTitular.processar();
              break;
            case 2:
              const editarClienteDependente = new EditarClienteDependente();
              editarClienteDependente.processar();
              break;
            default:
              console.log('Opção não entendida :(');
          }
          
    }
}