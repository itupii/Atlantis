import Processo from "../abstração/processos";
import Cliente from "../modelos/cli";
import Endereco from "../modelos/endereco";

export default class CadastroEndereco extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.recebeTexto('| Qual a rua?')
        let bairro = this.entrada.recebeTexto('| Qual o bairro?')
        let cidade = this.entrada.recebeTexto('| Qual a cidade?')
        let estado = this.entrada.recebeTexto('| Qual o estado?')
        let pais = this.entrada.recebeTexto('| Qual o país?')
        let codigoPostal = this.entrada.recebeTexto('| Qual o código postal?')
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cliente.Endereco = endereco
    }
}