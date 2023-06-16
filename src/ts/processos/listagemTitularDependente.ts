import Processo from "../abstração/processos";
import Armazem from "../dominio/armazem";
import ImpressorClienteDependente from "../impressores/impressorClienteDP";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cli";

export default class ListagemTitularDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    
    processar(): void {
        console.clear()

        var processo = false
        let responsavel = this.entrada.recebeTexto('| Insira o número do documento do cliente responsável: ')

        console.log('Iniciando a listagem dos clientes dependentes...')

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) {
                if (responsavel == this.clientes[index].Documentos[indexDoc].Numero) {
                    processo = true
                    this.clientes[index].Dependentes.forEach(dependente => {
                        this.impressor = new ImpressorClienteDependente(dependente)
                        console.log(this.impressor.imprimir())
                    })
                }
            }
        }

        if (processo != true) {
            console.log('\nCliente responsável não encontrado :(')
        }
    }
}