import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazenagem";
import Cliente from "../models/cliente";
import Documento from "../models/document";
import Endereco from "../models/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocCli";

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[];
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        var processo = false
        let responsavel = this.entrada.recebeTexto('| Insira o número do documento do cliente: ')

        console.log('cadastrando um novo cliente')

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) {
                if (responsavel == this.clientes[index].Documentos[indexDoc].Numero) {
                    processo = true
                    let nome = this.entrada.recebeTexto('| Qual o nome do novo cliente dependente?')
                    let nomeSocial = this.entrada.recebeTexto('| Qual o nome social do novo cliente dependente?')
                    let dataNascimento = this.entrada.recebeData('| Qual a data de nascimento?')

                    let dependente = new Cliente(nome, nomeSocial, dataNascimento)

                    this.processo = new CadastrarDocumentosCliente(dependente);
                    this.processo.processar();

                    dependente.Endereco = this.clientes[index].Endereco.clonar() as Endereco

                    this.clientes[index].Dependentes.push(dependente)

                    console.log('\nFinalizando o cadastro do cliente...')
                }
            }
        }
        if (processo != true) {
            console.log('\nCliente responsável não encontrado :(')
        }
    }
}