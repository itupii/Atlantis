import Acomodacao from "../modelos/acomod";
import Cliente from "../modelos/cli";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    
    private constructor() { }
    
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }

    public get Clientes() {
        return this.clientes
    }

    public get Acomodacoes() {
        return this.acomodacoes
    }
}