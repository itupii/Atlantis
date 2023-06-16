import { NomeAcomod } from "../tipos/NomeAcomod";
import Construtor from "../interfaces/construtor";
import Acomodacao from "../modelos/acomod";

export default class ConstrutorAcomodacao implements Construtor<Acomodacao>{
    private nomeAcomodacao: NomeAcomod = NomeAcomod.SolteiroSimples
    private camaSolteiro: Number = 0
    private camaCasal: Number = 0
    private suite: Number = 0
    private climatizacao: Boolean = false
    private garagem: Number = 0

    public set NomeAcomodacao(nomeAcomodacao: NomeAcomod) { this.nomeAcomodacao = nomeAcomodacao }
    public set CamaSolteiro(camaSolteiro: Number) { this.camaSolteiro = camaSolteiro }
    public set CamaCasal(camaCasal: Number) { this.camaCasal = camaCasal }
    public set Suite(suite: Number) { this.suite = suite }
    public set Climatizacao(climatizacao: Boolean) { this.climatizacao = climatizacao }
    public set Garagem(garagem: Number) { this.garagem = garagem }

    construir(): Acomodacao {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro,
            this.camaCasal, this.suite, this.climatizacao, this.garagem)
        return acomodacao
    }
}