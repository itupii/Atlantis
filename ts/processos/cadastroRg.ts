import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enum/TipoDocumento";
import Cliente from "../models/cliente";
import Documento from "../models/document";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.recebeTexto('| Qual o número do documento?')
        let dataExpedicao = this.entrada.recebeData('| Qual a data de expedição do documento?')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
    }
}