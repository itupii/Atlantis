"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var Entrada = /** @class */ (function () {
    function Entrada() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var valor = this.prompt("".concat(mensagem, ": "));
        return Number(valor);
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        return this.prompt("".concat(mensagem, ": "));
    };
    Entrada.prototype.receberData = function (mensagem) {
        var texto = this.prompt("".concat(mensagem, ", no padr\u00E3o dd/MM/yyyy: "));
        var partes = texto.split('/');
        var ano = Number(partes[2]);
        var mes = Number(partes[1]) - 1;
        var dia = Number(partes[0]);
        var data = new Date(ano, mes, dia);
        return data;
    };
    return Entrada;
}());
exports.default = Entrada;
