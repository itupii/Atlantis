import Processo from "../abstração/processos";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cli";
import CadastrarDocumentosCliente from "./cadastrarDocCli";
import CadastrarAcomodacaoCliente from "./cadastroAcomodCli";
import CadastroEndereco from "./cadastroEndereco";
import CadastroTelefone from "./cadastroTel";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.recebeTexto('| Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.recebeTexto('| Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.recebeData('| Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEndereco(cliente)
        this.processo.processar()

        this.processo = new CadastroTelefone(cliente)
        this.processo.processar()

        this.processo = new CadastrarAcomodacaoCliente(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('\nFinalizando o cadastro do cliente...\n')
    }
}