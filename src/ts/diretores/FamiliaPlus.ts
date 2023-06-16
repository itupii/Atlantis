import ConstrutorAcomodacao from "../construtores/construAcomod";
import { NomeAcomod } from "../tipos/NomeAcomod";
import Acomodacao from "../modelos/acomod";
import Diretor from "../abstração/diretor";

export default class FamiliaPlus extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomod.FamiliaMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 2
        return objetoConstrutor.construir()
    }
}