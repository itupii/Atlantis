import ConstrutorAcomodacao from "../construtores/construAcomod";
import { NomeAcomod } from "../tipos/NomeAcomod";
import Acomodacao from "../modelos/acomod";
import Diretor from "../abstração/diretor";

export default class SolteiroPlus extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomod.SolteiroMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 0
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 1
        objetoConstrutor.Suite = 1
        return objetoConstrutor.construir()
    }
}