import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomod";

export default class ImpressorAcomod implements Impressor {
    private acomodacao: Acomodacao  
    
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    
    private converterBooleano(valor: Boolean) {
        if (valor) {
            return `sim`
        } else {
            return `não`
        }
    }

    imprimir(): string {
        let descricao = `Nomenclatura: ${this.acomodacao.NomeAcomod.toString()}\n`
            + `-- Quantidade de camas para solteiros: ${this.acomodacao.CamaSolteiro}\n`
            + `-- Quantidade de camas para casais: ${this.acomodacao.CamaCasal}\n`
            + `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n`
            + `-- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}\n`
            + `-- Quantidade de suites: ${this.acomodacao.Suite}\n`
        return descricao
    }
}