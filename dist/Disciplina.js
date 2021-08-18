"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }
    // metado para acessar o nome da disciplina
    getNome() {
        return this.nome;
    }
}
exports.Disciplina = Disciplina;
