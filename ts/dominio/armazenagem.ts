import Cliente from "../models/cliente";

export default class armazenagem {
    private static instanciaUnica: armazenagem = new armazenagem()
    private clientes: Cliente[] = []
    private constructor() { }
    
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }

    public get Clientes() {
        return this.clientes
    }
}