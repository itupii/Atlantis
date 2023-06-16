import ConstrutorAcomodacao from "../construtores/construAcomod";
import { NomeAcomod } from "../tipos/NomeAcomod";
import Acomodacao from "../modelos/acomod";
import Diretor from "../abstração/diretor";

export default class DiretorFamiliaPlusize extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomod.FamiliaSuper
        objetoConstrutor.CamaCasal = 2
        objetoConstrutor.CamaSolteiro = 6
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 3
        return objetoConstrutor.construir()
    }
}