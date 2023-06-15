import Processo from "../abstracoes/processo";
import Cliente from "../models/cliente";
import Telefone from "../models/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de telefone...')

        let quantidade = this.entrada.recebeNumero('| Quantos telefones serão cadastrados?')

        for (let index = 0; index < quantidade; index++) {
            let ddd = this.entrada.recebeTexto('| Qual o DDD?')
            let numero = this.entrada.recebeTexto('| Qual o número?')
            let telefone = new Telefone(ddd, numero)

            this.cliente.Telefones.push(telefone)

            console.log(`----------------------`)
        }
    }
}