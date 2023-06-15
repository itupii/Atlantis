import Impressor from "../interfaces/impressor";
import Cliente from "../models/cliente";
import ImpressorDocumentos from "./impressoDocumentos";
import ImpressorEndereco from "./impressoEndereco";
import ImpressorTelefones from "./impressoTelefones";

export default class ImpresssoCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor
    impresso: any;
    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `--------------------\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}\n`

        this.impresso = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}\n`

        for (let index = 0; index < this.cliente.Telefones.length; index++) {
            this.impressor = new ImpressorTelefones(this.cliente.Telefones[index])
            impressao = impressao + `\n${this.impressor.imprimir()}\n`
        }

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}\n`

        impressao = impressao + `\n-------------------\n`
        return impressao
    }
}