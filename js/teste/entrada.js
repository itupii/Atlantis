"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Entrada {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    receberNumero(mensagem) {
        const valor = this.prompt(`${mensagem}: `);
        return Number(valor);
    }
    receberTexto(mensagem) {
        return this.prompt(`${mensagem}: `);
    }
    receberData(mensagem) {
        const texto = this.prompt(`${mensagem}, no padrão dd/MM/yyyy: `);
        const partes = texto.split('/');
        const ano = Number(partes[2]);
        const mes = Number(partes[1]) - 1;
        const dia = Number(partes[0]);
        const data = new Date(ano, mes, dia);
        return data;
    }
}
exports.default = Entrada;
